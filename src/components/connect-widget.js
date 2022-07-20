import React, { useEffect, useState } from "react";
import Button from "./button";
import Link from "next/link";
import styles from "../css/connectWidget.module.scss";
import { sanity } from "../util/index";

export async function getStaticProps() {
  const query = `*[_type == "childrensUnit"] | order(_createdAt desc) [0] {unitNumber}`;
  const res = await sanity.fetch(query);
  return { props: { res } };
}
export default function ConnectWidget({ data }) {
  const [kidsUnit, setKidsUnit] = useState(data);

  return (
    <div className={styles.connectWidget}>
      <h5>VBVF Resources</h5>
      <ul>
        <li>
          <Link href={`/childrens-content/unit-${kidsUnit}`}>
            <a>Journey Kids Lesson</a>
          </Link>
        </li>
        <li>
          <Link href="/about/faq">
            <a>Read our FAQ</a>
          </Link>
        </li>
        <li>
          <Link href="/about/beliefs">
            <a>What we believe</a>
          </Link>
        </li>
        <li>
          <Link href="/bible-studies">
            <a>More bible teaching</a>
          </Link>
        </li>
      </ul>
      <h5>Get in Touch</h5>
      <div className={styles.connectWidgetButtonContainer}>
        <Button
          size="small"
          color="green"
          link="https://vbvf.churchcenter.com/people/forms/26636?open-in-church-center-modal=true"
          title="Connect with us"
        />
        <Button
          size="small"
          color="green"
          link="https://vbvf.churchcenter.com/people/forms/34407?open-in-church-center-modal=true"
          title="Prayer Request"
        />
      </div>
      <h5>Give to VBVF</h5>
      <Button
        size="medium"
        title="Give now"
        color="green"
        buttonFunc={() => {
          window.fathom.trackGoal("7KDLHSBK", 0);
        }}
        link="https://vbvf.churchcenter.com/giving?open-in-church-center-modal=true"
      />
    </div>
  );
}
