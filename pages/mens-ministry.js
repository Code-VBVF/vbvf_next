import React, { useState } from "react";
import { sanity, sanityUrlFor } from "../util";
import { serializers } from "../util/sanity-serializers";
import styles from "../css/mensMinistry.module.scss";
import ScriptureVerse from "../components/scripture-verse";
import PortableText from "@sanity/block-content-to-react";
import StaffInfo from "../components/staff-info";
import Image from "next/image";
import Shovel from "../public/images/mens-ministry/shovel_compressed.jpeg";
import Accelerate from "../public/images/mens-ministry/speedometer_compressed.jpeg";
import HoldingBible from "../public/images/mens-ministry/holding-bible_compressed.jpg";
import ClimbingStairs from "../public/images/mens-ministry/climbing-stairs.jpg";
import SvgMask from "../public/images/mens-ministry/svg_mask.svg";
import Link from "next/link";
import Button from "../components/button";

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

      <h2>Events</h2>
      <div className={styles.events}>
        <div id className={styles.event}>
          <div className={styles.eventDetails}>
            <h4>Dig Deeper</h4>
            <p>
              Weekly, IRON MEN gather to share a meal, pray, and dig deeper into
              God’s Word through focused study of the Bible.
            </p>
            <Button
              title="See details"
              link="https://vbvf.churchcenter.com/registrations/events/category/18785"
              size="medium"
              color="green"
            />
          </div>
          <div className={`${styles.imageFeature} ${styles.digDeeper}`} />
        </div>
        <div className={styles.event}>
          <div className={styles.eventDetails}>
            <h4>Accelerate</h4>
            <p>
              Accelerate creates monthly opportunities for men of like interest
              to gather and strengthen relationships through fellowship and
              service.
            </p>
            <Button
              title="RSVP for Accelerate"
              link="https://vbvf.churchcenter.com/registrations/events/category/18785"
              size="medium"
              color="green"
            />
          </div>
          <div className={`${styles.imageFeature} ${styles.accelerate}`} />
        </div>
        <div id className={styles.event}>
          <div className={styles.eventDetails}>
            <h4>Rally Up</h4>
            <p>
              This quarterly event is a time of corporate worship, which
              combines fellowship, study and service.
            </p>
            <Button
              title="Get Rally Up info"
              link="https://vbvf.churchcenter.com/registrations/events/category/18785"
              size="medium"
              color="green"
            />
          </div>
          <div className={`${styles.imageFeature} ${styles.rallyUp}`} />
        </div>
        <div className={styles.event}>
          <div className={styles.eventDetails}>
            <h4>Annual Retreat</h4>
            <p>
              The high point of each year, a time to step away from your daily
              routine to reflect, study and praise God’s provision in your life
              in a serene setting.
            </p>
            <Button
              title="Register for retreat"
              link="https://vbvf.churchcenter.com/registrations/events/category/18785"
              size="medium"
              color="green"
            />
          </div>
          <div className={`${styles.imageFeature} ${styles.retreat}`} />
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
