import React, { useState, useEffect } from "react";
import PortableText from "@sanity/block-content-to-react";
import JourneyLogo from "../../public/images/logos/journey-logo.png";
import SofiJonBTS from "../../public/images/childrens_ministry/sofi_jon_bts.jpg";
import styles from "../../src/css/childrensMinistry.module.scss";
import ScriptureVerse from "../../src/components/scripture-verse";
import Button from "../../src/components/button";

import StaffInfo from "../../src/components/staff-info";
import { serializers } from "../../src/util/sanity-serializers";
import { sanity, sanityUrlFor } from "../../src/util/index";
import AlertBubble from "../../src/components/alert-bubble";
import Image from "next/image";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Children's Ministry"]{
    paragraphs,
    scripture,
    ministryLeader->
  }`;
  const res = await sanity.fetch(query);
  const data = await res[0];
  return { props: { data } };
}
export default function ChildrensMinistry({ data }) {
  const [pageData, setPageData] = useState(data);

  return (
    <div className={styles.childrensMinistry}>
      <div className={styles.childrensMinistryHeroContent}>
        <Image
          layout="intrinsic"
          height={216.408}
          width={300}
          alt="Journey Kids Logo"
          src={JourneyLogo}
        />
        {/* <AlertBubble /> */}
      </div>

      <div className={styles.childrensMinistryMission}>
        <PortableText
          className={styles.childrensMinistryMissionParagraph}
          renderContainerOnSingleChild={true}
          blocks={pageData?.paragraphs[0].bodyText}
          serializers={serializers}
        />
        <ScriptureVerse
          verse={pageData.scripture.verseText}
          reference={pageData.scripture.reference}
        />
      </div>

      {/* <div className={styles.childrensMinistryMaterials}>
        <div className={styles.buttonContainer}>
          <h2>
            Biblically grounded
            <br /> childrens' material
          </h2>
          <p>New videos and activities every week</p>
          <Button
            size="medium"
            title="View resources"
            color="green"
            buttonFunc={() => {
              window.open("/childrens-content");
            }}
          />
        </div>
        <Image alt="ministry leaders filming content" src={SofiJonBTS} />
      </div> */}
      <div className={styles.childrensMinistrySignUp}>
        <h4>
          Join our email list to receive notifications about new children's
          learning materials, events and other announcements.
        </h4>
        <Button
          size="large"
          title="Sign me up"
          color="green"
          buttonFunc={() => {
            window.location.href =
              "https://vbvf.churchcenter.com/people/forms/118844?open-in-church-center-modal=true";
          }}
        />
      </div>
      {pageData.ministryLeader !== undefined ? (
        <StaffInfo
          name={pageData?.ministryLeader.name}
          role={pageData?.ministryLeader.role}
          email={pageData?.ministryLeader.email}
          bio={pageData?.ministryLeader.bio}
          image={sanityUrlFor(pageData?.ministryLeader.image).width(500).url()}
          alt=""
        />
      ) : null}
    </div>
  );
}
