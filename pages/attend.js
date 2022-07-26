import React, { useState, useEffect } from "react";
import styles from "../css//attendService.module.scss";
import PortableText from "@sanity/block-content-to-react";
import { sanity } from "../util/index";
import { serializers } from "../util/sanity-serializers";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Attend a Service"]{
    paragraphs,
    faq,
    scripture
  }`;

  const res = await sanity.fetch(query);
  const data = res[0];
  return { props: { data } };
}
export default function AttendService({ data }) {
  const [pageData, setPageData] = useState(data);

  const paragraphs = pageData?.paragraphs.map((paragraph) => (
    <section>
      <h4>{paragraph.paragraphTitle}</h4>
      <PortableText blocks={paragraph.bodyText} serializers={serializers} />
    </section>
  ));

  return (
    <div className={styles.attend}>
      <h1>
        Attending a Service <br />
        <span id={styles.highlight}>Verse by Verse Fellowship</span>
      </h1>

      <div className={styles.attendDesc}>{paragraphs}</div>
      <p>
        {" "}
        For more information, please contact the church at info@vbvf.org or call
        210-460-7556.
      </p>
    </div>
  );
}
