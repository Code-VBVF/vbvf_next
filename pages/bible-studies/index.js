import React, { useState, useEffect } from "react";
import styles from "../../css/studyAggregator.module.scss";
import Link from "next/link";
import { sanity, sanityUrlFor, isOver } from "../../util/index";
import AlertBubble from "../../components/alert-bubble";
import Image from "next/image";

export async function getStaticProps() {
  const query = `*[_type == "series" && !isVbvmiStudy] | order(endDate desc) {
    title,
    seriesImage,
    endDate,
    
  }`;
  const res = await sanity.fetch(query);
  const data = await res;

  return { props: { data } };
}
export default function StudyAggregator({ data }) {
  const [series, setSeries] = useState(data);

  const studies = series.map((study) => (
    <Link
      key={study.title}
      className={styles.studyLink}
      href={`/bible-studies/${study.title.replace(/\x20+/g, "-")}`}
    >
      <div className={styles.studyIcon}>
        <span
          className={`${
            !isOver(study?.endDate)
              ? styles["indicatorActive"]
              : styles["indicatorHidden"]
          }`}
        >
          Active Series
        </span>
        <Image
          src={`${sanityUrlFor(study.seriesImage)}`}
          alt=""
          layout="intrinsic"
          width={400}
          height={225}
        />
        <h3>{study.title}</h3>
      </div>
    </Link>
  ));

  return (
    <div className={styles.studies}>
      <div className={styles.studiesDesc}>
        <h1>Bible Teaching</h1>
        <AlertBubble />
        <p>
          Verse by Verse Fellowship prioritizes the teaching of the word. We
          believe that God uses His word to equip followers of Christ to walk in
          confidence and love. Please enjoy these teaching series from teachers
          here at VBVF. If you would like to listen to more Bible teaching,
          please visit our sister ministry,{" "}
          <Link
            target={"blank"}
            rel="noopener noreferrer"
            href={"https://www.versebyverseministry.org/"}
          >
            Verse by Verse Ministry
          </Link>
          .
        </p>
      </div>
      <div className={styles.studiesArray}>{studies}</div>
    </div>
  );
}
