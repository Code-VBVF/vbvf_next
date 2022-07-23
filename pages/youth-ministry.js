import React, { useState, useEffect } from "react";
import LogosLogo from "../public/images/logos/logos-logo.png";
import Volunteer from "../public/images/youth_assets/volunteer_youth.jpg";
import styles from "../css//youthMinistry.module.scss";
import { serializers } from "../util/sanity-serializers";
import { sanity, sanityUrlFor } from "../util/index";
import PortableText from "@sanity/block-content-to-react";
import ScriptureVerse from "../components/scripture-verse";
import StaffInfo from "../components/staff-info";
import Button from "../components/button";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import AlertBubble from "../components/alert-bubble";
import Image from "next/image";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Youth Ministry"]{
    paragraphs,
    scripture,
    faq,
    ministryLeader->,
  }`;
  const res = await sanity.fetch(query);
  const data = await res[0];
  console.log(data);
  return { props: { data } };
}

export default function YouthMinistry({ data }) {
  const [pageData, setPageData] = useState(data);

  return (
    <div className={styles.youth}>
      <div className={styles.youthHeroContent}>
        <Image
          height={300}
          width={300}
          layout="intrinsic"
          className={styles.youthHeaderLogo}
          src={LogosLogo}
          alt="Logos Student Ministry Logo"
        />
        {/* <AlertBubble /> */}
      </div>

      <div className={styles.youthDescription}>
        <ScriptureVerse
          verse={pageData.scripture.verseText[0]}
          reference={pageData.scripture.reference}
        />

        <PortableText
          renderContainerOnSingleChild={true}
          className={styles.youthDescriptionMission}
          blocks={pageData?.paragraphs[0].bodyText}
          serializers={serializers}
        />
      </div>

      <h2>Logos FAQ</h2>

      <FrequentlyAskedQuestions faq={pageData.faq.faqs} layout="vertical" />

      {/* <div className={styles.youthSignUp}>
        <img src={Volunteer} alt="" />
        <div>
          <h3>
            Want to volunteer
            <br /> with student ministry?
          </h3>
          <Button
            color="green"
            title="Sign up here"
            size="medium"
            link="https://vbvf.churchcenter.com/people/forms/72047"
          />
        </div>
      </div> */}
      <>
        {pageData.ministryLeader && (
          <StaffInfo
            name={pageData?.ministryLeader.name}
            role={pageData?.ministryLeader.role}
            email={pageData?.ministryLeader.email}
            bio={pageData?.ministryLeader.bio}
            image={sanityUrlFor(pageData?.ministryLeader.image)
              .width(500)
              .url()}
            alt=""
          />
        )}
      </>
    </div>
  );
}
