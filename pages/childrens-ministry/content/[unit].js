import React, { useState, useEffect } from "react";

import smoothscroll from "smoothscroll-polyfill";

import { sanity } from "../../../util/index";
import styles from "../../../css/childrensUnitPage.module.scss";
import Link from "next/link";

export async function getStaticPaths() {
  const routeQuery = `*[_type == "childrensUnit"] {
    unitNumber
  }`;
  const res = await sanity.fetch(routeQuery);

  const paths = res.map((unit) => {
    return {
      params: { unit: "unit-" + unit.unitNumber },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sanityParams = { unitNumber: params.unit.split("-")[1] };
  console.log("sanity paramgs: ", sanityParams);
  const query = `*[_type == "childrensUnit" && unitNumber == $unitNumber] | order(lessonNumber asc) {
  title,
  lessons[]{
    ...,
    "twoThruThreeWorksheet" : twoThruThreeWorksheet.asset->url,
    "prekWorksheet":prekWorksheet.asset->url,
    "kinderThruThirdWorksheet":kinderThruThirdWorksheet.asset->url,
    "fourthThruFifthWorksheet":fourthThruFifthWorksheet.asset->url,

  }
}`;
  const res = await sanity.fetch(query, sanityParams);
  console.log("results: ", res);
  return { props: { data: res } };
}
export default function ChildrensUnitPage({ data }) {
  const [unit, setUnit] = useState(data[0]);
  const [lessons, setLessons] = useState(data[0].lessons);
  const [currentLesson, setCurrentLesson] = useState(data[0].lessons[0]);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className={styles.unit}>
      <div className={styles.unitContent}>
        <div className={styles.unitContentAssets}>
          <Link href="/childrens-ministry/content/">
            Back to Children's Content
          </Link>
          <h3 className={styles.unitContentAssetsTitle}>
            {`Unit ${unit.unitNumber} - ${unit.title}`}
          </h3>

          <p className={styles.unitContentAssetsBody}>{unit.description}</p>
        </div>

        <div className={styles.unitContentVideo}>
          <iframe
            allowFullScreen
            title={currentLesson.title}
            src={`https://player.vimeo.com/video/${currentLesson.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
          ></iframe>
        </div>
        <h5>
          {" "}
          Currently Playing: Lesson {currentLesson.number} {currentLesson.title}
        </h5>
      </div>

      <div className={styles.unitLessonList}>
        {lessons.map((lesson, index) => (
          <div
            className={`${styles.unitLessonListItem} ${
              lesson.title === currentLesson.title && styles.active
            }`}
            key="index"
          >
            <button
              className={styles.mobilePlayButton}
              onClick={() => {
                setCurrentLesson(lesson);
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <h4>Play Lesson {lesson.number}</h4>
            </button>
            <button
              className={styles.playButton}
              onClick={() => {
                setCurrentLesson(lesson);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
              </svg>
              <h5>Play Lesson</h5>
            </button>
            <h3 className={styles.desktopTitle}>
              {lesson.title} <span>Lesson {lesson.number}</span>
            </h3>

            <div className={styles.unitLessonListItemWorksheets}>
              <h6>Download Worksheets</h6>
              <div className={styles.unitLessonListItemWorksheetsGroup}>
                <button
                  target="blank"
                  rel="noopener noreferrer"
                  onClick={() => window.open(lesson.twoThruThreeWorksheet)}
                >
                  Ages 2-3 Worksheet
                </button>
                <button
                  target="blank"
                  rel="noopener noreferrer"
                  onClick={() => window.open(lesson.prekWorksheet)}
                >
                  PreK Worksheet
                </button>
                <button
                  target="blank"
                  rel="noopener noreferrer"
                  onClick={() => window.open(lesson.kinderThruThirdWorksheet)}
                >
                  Kinder-3rd Grade
                </button>
                <button
                  target="blank"
                  rel="noopener noreferrer"
                  onClick={() => window.open(lesson.fourthThruFifthWorksheet)}
                >
                  3rd-5th Grade
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
