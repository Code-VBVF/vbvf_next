import Link from "next/link";
import React from "react";
import styles from "../css/button.module.scss";

const Button = (props) => {
  const size = () => {
    return props.size === "small"
      ? "sm"
      : props.size === "medium"
      ? "md"
      : props.size === "large"
      ? "lg"
      : "";
  };

  return (
    <Link
      target={props.link?.includes("churchcenter") ? "_blank" : null} //forcing a new tab to open if link is to church center
      rel="noreferrer"
      href={props.link ?? "#0"}
    >
      <button
        type={props.type ?? ""}
        className={`${styles.button} ${styles[size()]} ${styles[props.color]}`}
        onClick={props.buttonFunc}
      >
        {props.title}
      </button>
    </Link>
  );
};
export default Button;
