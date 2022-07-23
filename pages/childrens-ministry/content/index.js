import React, { useState, useEffect } from "react";
import styles from "../../../css/childrensContentAggregator.module.scss";

import Link from "next/link";
import { Card, CardTitle, CardSubtitle, CardImg } from "reactstrap";
import { sanity, sanityUrlFor } from "../../../util/index";

export async function getStaticProps() {
  const query = `*[_type == "childrensUnit"] | order(unitNumber asc) {
    unitNumber,
    title,
    seriesImage
  }`;
  const res = await sanity.fetch(query);

  return { props: { data: res } };
}
export default function ChildrensContentAggregator({ data }) {
  const [childrensUnits, setChildrensUnits] = useState(data);

  return (
    <div className={styles.units}>
      <div className={styles.unitsDesc}>
        <h1>Children's Teaching Materials</h1>
      </div>
      {childrensUnits.map((unit) => (
        <Link
          key={unit.unitNumber}
          className={styles.unitLink}
          href={`content/unit-${unit.unitNumber}`}
        >
          <div className={styles.unitIcon}>
            <Card body>
              <CardImg
                top
                width="100%"
                src={sanityUrlFor(unit.seriesImage).width(500).url()}
                alt={`${unit.title} Image`}
              />
              <CardTitle>{`Unit ${unit.unitNumber}`}</CardTitle>
              <CardSubtitle>{unit.title}</CardSubtitle>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
}
