import React, { useState } from "react";
import { sanity } from "../src/util/index";
import { serializers } from "../src/util/sanity-serializers";
import styles from "../src/css/careMinistry.module.scss";
import FrequentlyAskedQuestions from "../src/components/frequently-asked-questions";
import ScriptureVerse from "../src/components/scripture-verse";
import PortableText from "@sanity/block-content-to-react";
import CareMinistryForm from "../src/components/care-ministry-form";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Button from "../src/components/button";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Care Ministries"]{
    paragraphs,
    faq,
    scripture
  }`;
  const res = await sanity.fetch(query);
  const data = await res[0];
  return { props: { data } };
}
export default function CareMinistry({ data }) {
  const [pageData, setPageData] = useState(data);

  //modal state
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div className={styles.careMinistries}>
      <h1>Care Ministry</h1>
      <iframe
        title="Care Ministries"
        src="https://player.vimeo.com/video/508963469?color=ffffff&title=0&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className={styles.careMinistriesRow}>
        <PortableText
          className={styles.careMinistriesRowVision}
          blocks={pageData.paragraphs[0].bodyText}
          serializers={serializers}
          renderContainerOnSingleChild={true}
        />
        <ScriptureVerse
          verse={pageData.scripture.verseText}
          reference={pageData.scripture.reference}
        />
      </div>
      <div className={styles.careMinistriesRow}>
        <span>
          <h3>Help for the Hurting</h3>
          <p>1-5 sessions</p>
        </span>
        <PortableText
          blocks={pageData.paragraphs[1].bodyText}
          serializers={serializers}
          renderContainerOnSingleChild={true}
        />
      </div>
      <div className={styles.careMinistriesRow}>
        <span>
          <h3>Biblical Counseling</h3>
          <p>Up to 10 sessions</p>
        </span>
        <PortableText
          blocks={pageData.paragraphs[2].bodyText}
          serializers={serializers}
          renderContainerOnSingleChild={true}
        />
      </div>
      <div className={styles.careMinistriesRow}>
        <span>
          <h3>Care and Recovery Groups</h3>
          <p>Typically 13 Weeks</p>
        </span>
        <PortableText
          blocks={pageData.paragraphs[3].bodyText}
          serializers={serializers}
          renderContainerOnSingleChild={true}
        />
      </div>

      <div className={styles.contactContainer}>
        <h3>
          If you have a question or you're interested in talking with someone,
          please contact us.{" "}
        </h3>
        <Button size="large" color="gold" buttonFunc={open} title="Contact" />
      </div>
      <DialogOverlay isOpen={showDialog} onDismiss={close}>
        <DialogContent
          style={{
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button className={styles.closeButton} onClick={close}>
            <span role="img" aria-label="Close Contact Form">
              ❌
            </span>
          </button>

          <CareMinistryForm closeFunc={close} />
        </DialogContent>
      </DialogOverlay>

      <h3>FAQ</h3>
      <FrequentlyAskedQuestions layout="vertical" faq={pageData?.faq.faqs} />
    </div>
  );
}
