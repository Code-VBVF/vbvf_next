import React, { useState, useEffect } from "react";
import "../css/study-aggregator.scss";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardImg } from "reactstrap";
import { sanity, sanityUrlFor } from "../util/index";

export default function StudyAggregator() {
  const query = `*[_type == "series"] {
    title,
    seriesImage
  }`;
  const [series, setSeries] = useState([]);

  useEffect(() => {
    sanity.fetch(query).then((results) => setSeries(results));
  }, [query]);
  const studies = series.map((study) => (
    <Link
      key={study.title}
      className="study-link"
      to={`bible-studies/${study.title.replace(" ", "-")}`}
    >
      <div className="study-icon">
        <CardImg
          top
          width="100%"
          src={sanityUrlFor(study.seriesImage).width(400).url()}
          alt={`${study.title} Image`}
        />
        <Card body>
          <CardTitle>{study.title}</CardTitle>
        </Card>
      </div>
    </Link>
  ));

  return (
    <div className="studies">
      <div className="studies-desc">
        <h1>Bible Teaching</h1>
        <p>
          Verse by Verse Fellowship prioritizes the teaching of the word. We
          believe that God uses His word to equip followers of Christ to walk in
          confidence and love. Please enjoy these teaching series from teachers
          here at VBVF. If you would like to listen to more Bible teaching,
          please visit our sister ministry,{" "}
          <Link to={{ pathname: "/sermon-redirect", deepDive: "" }}>
            Verse by Verse Ministry
          </Link>
          .
        </p>
      </div>
      {studies}
    </div>
  );
}
