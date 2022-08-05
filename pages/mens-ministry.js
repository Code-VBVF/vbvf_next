import React, { useState } from "react";
import { sanity, sanityUrlFor } from "../util";
import { serializers } from "../util/sanity-serializers";
import styles from "../css/mensMinistry.module.scss";
import ScriptureVerse from "../components/scripture-verse";
import PortableText from "@sanity/block-content-to-react";
import StaffInfo from "../components/staff-info";
import Image from "next/image";
import DigDeeper from "../public/images/mens-ministry/digging_compressed.jpeg";
import Accelerate from "../public/images/mens-ministry/speedometer_compressed.jpeg";
import Handshake from "../public/images/mens-ministry/handshake_compressed.jpeg";
import Link from "next/link";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Men's Ministry"]{
    paragraphs,
    faq,
    scripture,
    ministryLeader->
  }`;
  const res = await sanity.fetch(query);
  {
    /* TODO: service call to grab registration urls for visible events  */
  }
  return { props: { data: res[0] } };
}
export default function MensMinistry({ data }) {
  const [pageData, setPageData] = useState(data);
  return (
    <div className={styles.mensMinistry}>
      <h1>Ironmen</h1>
      <div className={styles.row}>
        <PortableText
          renderContainerOnSingleChild={true}
          blocks={pageData.paragraphs[0].bodyText}
          serializers={serializers}
        />
        <ScriptureVerse
          verse={pageData.scripture.verseText}
          reference={pageData.scripture.reference}
        />
      </div>
      <div>maybe a video or carosel of images here?</div>
      <h2>Events</h2>
      <div className={`${styles.row} ${styles.events}`}>
        <Link href={"#dig-deeper"}>
          <div className={styles.event}>
            <h3>Dig Deeper</h3>
            <span className={styles.eventImage}>
              <div className={styles.imageContainer}>
                <Image src={DigDeeper} />
              </div>
            </span>
            Weekly
          </div>
        </Link>
        <Link href={"#accelerate"}>
          <div className={styles.event}>
            <h3>Accelerate</h3>
            <span className={styles.eventImage}>
              <div className={styles.imageContainer}>
                <Image src={Accelerate} />
              </div>
            </span>
            Monthly
          </div>
        </Link>
        <Link href={"#rally-up"}>
          <div className={styles.event}>
            <h3>Rally Up</h3>
            <span className={styles.eventImage}>
              <Image src={Handshake} />
            </span>
            Quarterly
          </div>
        </Link>
        <Link href={"#retreat"}>
          <div className={styles.event}>
            <h3>Retreat</h3>
            <span className={styles.eventImage}>
              <div className={styles.imageContainer}>
                <Image src={Accelerate} />
              </div>
            </span>
            Yearly
          </div>
        </Link>
      </div>
      <div>
        <div
          id="dig-deeper"
          className={`${styles.fullWidthRow} ${styles.digDeeper}`}
        >
          <h4>Dig Deeper</h4>
          <p>
            Weekly, IRON MEN gather to share a meal, pray, and dig deeper into
            God’s Word through focused study of the Bible.
          </p>
        </div>
        <div
          id="accelerate"
          className={`${styles.fullWidthRow} ${styles.accelerate}`}
        >
          <h4>Accelerate</h4>
          <p>
            Accelerate creates monthly opportunities for men of like interest to
            gather and strengthen relationships through fellowship and service.
          </p>
        </div>
        <div
          id="rally-up"
          className={`${styles.fullWidthRow} ${styles.rallyUp}`}
        >
          <h4>Rally Up</h4>
          <p>
            This quarterly event is a time of corporate worship, which combines
            fellowship, study and service.
          </p>
        </div>
        <div
          id="retreat"
          className={`${styles.fullWidthRow} ${styles.retreat}`}
        >
          <h4>Annual Retreat</h4>
          <p>
            The high point of each year, a time to step away from your daily
            routine to reflect, study and praise God’s provision in your life in
            a serene setting.
          </p>
        </div>
      </div>
      {pageData.ministryLeader && (
        <StaffInfo
          name={pageData?.ministryLeader.name}
          role={pageData?.ministryLeader.role}
          email={pageData?.ministryLeader.email}
          bio={pageData?.ministryLeader.bio}
          image={sanityUrlFor(pageData?.ministryLeader.image).width(500).url()}
          alt=""
        />
      )}
    </div>
  );
}
