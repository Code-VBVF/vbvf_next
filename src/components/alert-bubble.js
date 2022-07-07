import React, { useState, useEffect } from "react";
import { sanity } from "../util/index";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../css/alert-bubble.module.scss";

export async function getStaticProps() {
  //the query beneath pulls in announcements that are not expired which also contain the current page in the whereToDisplay array
  const query = `*[_type == "specialAnnouncement" && expirationDate > $now && $currentPage in whereToDisplay ] {
        title,
        body,
        expirationDate,
        alertBubbleText,
        whereToDisplay,
        _id
    }`;
  const res = await sanity.fetch(query);
  const data = await res[0];
  return { props: { data } };
}
export default function AlertBubble({ data }) {
  const [announcement, setAnnouncement] = useState(data ?? null);
  let page = useRouter();
  const params = { currentPage: page.pathname };

  return (
    <div
      className={`${styles.alertBubble} ${
        announcement != null ? styles["active"] : styles["hidden"]
      }`} //conditionally showing announcement
    >
      {announcement?.alertBubbleText}{" "}
      <Link href={`/:announcement._id:`}>
        <a>Read more</a>
      </Link>
    </div>
  );
}
