import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import FrequentlyAskedQuestions from "../../src/components/frequently-asked-questions";
import { sanity } from "../../src/util/index";
import styles from "../../src/css/faq.module.scss";
import AboutMenu from "../../src/components/about-menu";
// import AlertBubble from "../../src/components/alert-bubble";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "About Page"]{...}`;
  const res = await sanity.fetch(query);
  const data = await res[0];
  return { props: { data } };
}
export default function faq({ data }) {
  const [pageData, setPageData] = useState(data);
  const [faqIsLoading, setFaqIsLoading] = useState(true);

  return (
    <div className={styles.faq}>
      {/* <AlertBubble /> */}
      <AboutMenu />
      <>
        <h1>FAQ</h1>
        <FrequentlyAskedQuestions faq={pageData?.faq.faqs} layout="vertical" />
      </>
      {/* )} */}
    </div>
  );
}
