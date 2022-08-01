import React from "react";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Mens Ministry"]{
    paragraphs,
    faq,
    scripture,
    ministryLeader->
  }`;
  const res = await sanity.fetch(query);
}
export default function MensMinistry() {
  {
    /* TODO: service call to grab registration urls for visible events  */
  }
  return (
    <div>
      <h1>Ironmen</h1>
      <div className={styles.row}>Description of men's ministry here.</div>
      <div>maybe a video or carosel of images here?</div>
      <h2>Events</h2>
      <div className={styles.row}>
        <span>Dig Deeper</span>
        <span>Accelerate</span>
        <span>Rally Up</span>
        <span>Annual Retreat</span>
      </div>
    </div>
  );
}
