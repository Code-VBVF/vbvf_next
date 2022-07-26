import React from "react";
import Button from "./button";
import styles from "../css/connectionSteps.module.scss";

export default function ConnectionStep(props) {
  return (
    <div className={styles.stepContainer}>
      <p>{props.copy}</p>
      <Button
        size="medium"
        color="green"
        title={props.buttonText}
        link={props.link}
      />
    </div>
  );
}
