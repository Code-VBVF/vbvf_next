import React from "react";
import PortableText from "@sanity/block-content-to-react";
import styles from "../css/frequentlyAskedQuestions.module.scss";
import Link from "next/link";

export default function FrequentlyAskedQuestions(props) {
  const serializers = {
    //this helps react understand how to present links
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return (
          <Link href={href}>
            <a>{children}</a>
          </Link>
        );
      },
    },
  };

  const faqList = props.faq?.map((question) => (
    <div className={styles.faqListItem}>
      <h3>{question.question}</h3>

      {/* making use of sanity's component for reading in portable text */}
      <p>
        <PortableText blocks={question.answer2} serializers={serializers} />
      </p>
    </div>
  ));

  return <div className={`${styles.faqList} ${props.layout}`}>{faqList}</div>;
}
