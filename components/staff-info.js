import React from "react";
import StaffCard from "./staff-card";
import styles from "../css/staff-info.module.scss";

export default function StaffInfo(props) {
  return (
    <div className={styles.staffInfoContainer}>
      <div className={styles.staffCard}>
        <StaffCard
          title={props.name}
          subtitle={props.role}
          email={props.email}
          image={props.image}
        />
      </div>
      <div className={styles.staffInfo}>
        <h2>Meet {props.name.split(" ")[0]}</h2>
        <p>{props.bio}</p>
      </div>
    </div>
  );
}
