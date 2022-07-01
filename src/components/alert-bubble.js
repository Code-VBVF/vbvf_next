import React, { useState, useEffect } from "react";
import { sanity } from "../util/index";
import { Link } from "next/link";
import { useRouter } from "next/router";
import styles from "../css/alert-bubble.module.scss";

export default function AlertBubble() {
  const [announcement, setAnnouncement] = useState();
  let page = useRouter();
  const params = { currentPage: page.pathname };

  //the query beneath pulls in announcements that are not expired which also contain the current page in the whereToDisplay array
  const announcementQuery = `*[_type == "specialAnnouncement" && expirationDate > $now && $currentPage in whereToDisplay ] {
        title,
        body,
        expirationDate,
        alertBubbleText,
        whereToDisplay,
        _id
    }`;

  useEffect(() => {
    sanity
      .fetch(announcementQuery, params)
      .then((result) => {
        setAnnouncement(result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={`${styles.alertBubble} ${
        announcement != null ? styles["active"] : styles["hidden"]
      }`} //conditionally showing announcement
    >
      {announcement?.alertBubbleText}{" "}
      <Link href={`/:announcement?._id:`}>
        <a>Read more</a>
      </Link>
    </div>
  );
}
