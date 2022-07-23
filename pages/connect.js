import React from "react";
import Attendee from "../public/images/connect/attending_meeting.jpg";
import iPhones from "../public/images/connect/Iphones.png";
import ConnectionStep from "../components/connection-steps";
import styles from "../css//connect.module.scss";
import Button from "../components/button";
import { getMobileOperatingSystem } from "../util";
import Image from "next/image";

const ConnectPage = () => {
  const appStoreLink = () => {
    if (getMobileOperatingSystem() === "iOS") {
      return "https://apps.apple.com/us/app/church-center-app/id1357742931";
    } else if (getMobileOperatingSystem() === "Android") {
      return "https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&hl=en_US";
    } else {
      return "https://vbvf.churchcenter.com/home";
    }
  };
  return (
    <div className={styles.connectContainer}>
      <div id={styles.connectHeader}></div>
      <h1>Connect Here.</h1>
      <div className={styles.firstRow}>
        <div className={styles.connectionMeeting}>
          <h2>Connection Meeting</h2>
          <p>
            We love seeing so many new faces at VBVF and would love to meet you!
            Come to one of the Connection Meetings immediately after worship
            service on the last Sunday of every month. We will meet you in the
            flex room for a quick informational gathering to learn more about
            VBVF. One of our pastors will give a quick overview of all the great
            things happening at VBVF and answer any questions you might have.
          </p>

          <ConnectionStep
            copy=" We would love to contact you. Please submit a connection card using
            the button below."
            link="https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true"
            buttonText="Connection Card"
          />
        </div>
        <div className={styles.connectionImage}>
          <Image
            layout="intrinsic"
            width={425}
            height={319}
            src={Attendee}
            alt="vbvf member in connection meeting"
          />
        </div>
      </div>
      <div className={styles.churchCenterRow}>
        <div className={styles.churchCenterRowTitleButton}>
          <h3>Start connecting now</h3>
          <p>
            Check out the church center app to find out what's going on at VBVF.
            Browse events, explore small groups and more!{" "}
          </p>
          <Button
            title="Get Church Center"
            size="medium"
            color="green"
            link={appStoreLink()}
          />
        </div>
        <Image
          layout="intrinsic"
          width={550}
          height={477}
          src={iPhones}
          alt=""
        />
      </div>
    </div>
  );
};

export default ConnectPage;
