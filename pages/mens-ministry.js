import React, { useState } from "react";
import { sanity, sanityUrlFor } from "../util";
import { serializers } from "../util/sanity-serializers";
import styles from "../css/mensMinistry.module.scss";
import ScriptureVerse from "../components/scripture-verse";
import PortableText from "@sanity/block-content-to-react";
import StaffInfo from "../components/staff-info";

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
  console.log(pageData);
  return (
    <div>
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
      <div className={styles.row}>
        <span>Dig Deeper</span>
        <span>Accelerate</span>
        <span>Rally Up</span>
        <span>Annual Retreat</span>
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
