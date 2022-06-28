import React from "react";
import Button from "./button";
import styles from "../css/preview.module.scss";

export default function Preview(props) {
  return (
    <div className={styles.preview}>
      <img src={props.image} alt="" />
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
