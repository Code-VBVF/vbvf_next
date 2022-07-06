import React from "react";
import Button from "./button";
import styles from "../css/preview.module.scss";
import Image from "next/image";

export default function Preview(props) {
  return (
    <div className={styles.preview}>
      <Image
        layout="intrinsic"
        width={457}
        height={305}
        src={props.image}
        alt=""
      />
      <h4>{props.title}</h4>
      <p>{props.body}</p>
      <Button
        size="medium"
        color={props.color ? props.color : "green"}
        link={props.link}
        title={props.buttonTitle}
      />
    </div>
  );
}
