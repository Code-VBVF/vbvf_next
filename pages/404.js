import React from "react";
import Link from "next/link";
import styles from "../css//notFound.module.scss";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h3>
        This means that we couldn't find what you're looking for. Sorry about
        that.
      </h3>
      <p>
        These are some of the most popular pages on our site, maybe you were
        looking for one of these?
      </p>
      <ul>
        <li>
          <Link href="/bible-studies/">
            <a>Bible study media</a>
          </Link>
        </li>
        <li>
          <Link href="about/faq">
            <a>FAQ</a>
          </Link>
        </li>
        <li>
          <Link href="/livestream">
            <a>Livestream</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
