import React, { useState } from "react";

import styles from "../css//smallGroups.module.scss";

import StaffInfo from "../components/staff-info";
import Logo from "../public/images/logos/small_group_logo.svg";
import PortableText from "@sanity/block-content-to-react";
import Button from "../components/button";
import Praying from "../public/images/small_groups/praying.jpg";
import AlertBubble from "../components/alert-bubble";

import { sanity, sanityUrlFor } from "../util/index";
import { serializers } from "../util/sanity-serializers";
import FrequentlyAskedQuestions from "../components/frequently-asked-questions";
import Image from "next/image";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Small Groups"]{
    paragraphs,
    faq,
    ministryLeader->
  }`;
  const res = await sanity.fetch(query);

  return { props: { data: res[0] } };
}
export default function SmallGroups({ data }) {
  const [pageData, setPageData] = useState(data);

  return (
    <div className={styles.smallGroup}>
      <div className={styles.smallGroupHeader}>
        <Image
          layout="intrinsic"
          width={376}
          height={424.27}
          alt=""
          src={Logo}
        />
        <h1>
          VBVF
          <br /> Small
          <br /> Groups
        </h1>
      </div>
      <AlertBubble />
      <div className={styles.smallGroupInfo}>
        <PortableText
          className={styles.smallGroupInfoParagraph}
          renderContainerOnSingleChild={true}
          blocks={pageData.paragraphs[0].bodyText}
          serializers={serializers}
        />
        <div className={styles.smallGroupInfoImage}>
          <Image
            layout="intrinsic"
            width={549.28}
            height={366.36}
            alt=""
            src={Praying}
          />
        </div>
      </div>
      <div className={styles.smallGroupButtonContainer}>
        <Button
          color="green"
          title="Find a Small Group"
          size="large"
          link="https://vbvf.churchcenter.com/groups/small-groups"
        />
        <Button
          color="green"
          title="Become a leader"
          size="large"
          link="https://vbvf.churchcenter.com/people/forms/185037"
        />
      </div>

      <>
        <FrequentlyAskedQuestions faq={pageData?.faq.faqs} layout="vertical" />

        <StaffInfo
          name={pageData?.ministryLeader.name}
          role={pageData?.ministryLeader.role}
          email={pageData?.ministryLeader.email}
          image={sanityUrlFor(pageData?.ministryLeader.image).width(500).url()}
          alt=""
          bio={pageData?.ministryLeader.bio}
        />
      </>
    </div>
  );
}
