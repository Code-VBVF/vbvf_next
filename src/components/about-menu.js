import React from "react";
import { Nav } from "reactstrap";
import Link from "next/link";
import styles from "../css/aboutMenu.module.scss";
import { useRouter } from "next/router";

export default function AboutMenu() {
  const isActive = (pageName) => {
    console.log(useRouter().pathname);
    return useRouter().pathname.includes(pageName);
  };
  return (
    <div className={styles.aboutMenu}>
      <Nav>
        <Link href="/about/faq">
          <a className={`${isActive("faq") ? styles["active"] : ""}`}>FAQ</a>
        </Link>
        <Link href="/about/leadership">
          <a className={`${isActive("leadership") ? styles["active"] : ""}`}>
            Leadership
          </a>
        </Link>
        <Link href="/about/our-story">
          <a className={`${isActive("story") ? styles["active"] : ""}`}>
            Our Story
          </a>
        </Link>
        <Link href="/about/beliefs">
          <a className={`${isActive("beliefs") ? styles["active"] : ""}`}>
            Our Beliefs
          </a>
        </Link>
      </Nav>
    </div>
  );
}
