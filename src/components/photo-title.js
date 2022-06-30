import React from "react";
import Image from "next/image";
import styles from "../css/photo-title.module.scss";

export default function PhotoTitle(props) {
  console.log(props);
  return (
    <div className={styles.person}>
      <Image
        loading={props.role === "Elder" ? "eager" : "lazy"}
        src={props.image}
        alt={props.name}
        layout="fill"
        width={300}
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
