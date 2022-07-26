import React from "react";
import Image from "next/image";
import styles from "../css/photo-title.module.scss";

export default function PhotoTitle(props) {
  return (
    <div className={styles.person}>
      <Image
        src={props.image}
        alt={props.name}
        layout="intrinsic"
        width={300}
        height={400}
      />

      <p>
        {props.name}
        {props.role ? <span>{props.role}</span> : <span></span>}
        {props.title ? <span>{props.title}</span> : <span></span>}
        {props.email ? <span>{props.email}</span> : <span></span>}
      </p>
    </div>
  );
}
