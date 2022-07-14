import React, { useState } from "react";

import { sanity, isOver, sanityUrlFor } from "../../src/util/index";
import Link from "next/link";

import LessonBlock from "../../src/components/lesson-block";

import styles from "../../src/css/studyPage.module.scss";
import Image from "next/image";

export async function getStaticPaths() {
  const routeQuery = `*[_type == 'series' && !isVbvmiStudy]|{title}`;
  const res = await sanity.fetch(routeQuery);
  const paths = res.map((study) => {
    return {
      params: { studyName: study.title.replace(/ /gi, "-") },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const sanityParams = { studyName: params.studyName.replace(/-/g, " ") };
  const query = `*[_type == 'series' && title == $studyName]{
    title, 
    location,
    meetingTime,
    endDate,
    childcareProvided,
    seriesImage,
    description,
    lessons[]{
      ...,
      'notesUrl' : notes.asset->url,
      'questionsUrl' : questions.asset->url
    },
    teacher->
  }`;

  const res = await sanity.fetch(query, sanityParams);
  const data = await res;
  return { props: { data } };
}
export default function StudyPage({ data }) {
  const [series, setSeries] = useState(data[0]);
  const [seriesOver, setSeriesOver] = useState(true);

  const [lessons, setLessons] = useState(data[0].lessons);

  const hasContent = (lesson) => {
    if (lesson.videoId || lesson.audioLink) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className={styles.studyContainer}>
      <div className={styles.studyInfo}>
        <div className={styles.backLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <Link href="/bible-studies">
            <a>Back to bible studies</a>
          </Link>
        </div>
        <img
          alt=""
          src={sanityUrlFor(series?.seriesImage).size(500, 300).url()}
        />
        <h1 className={styles.studyInfoStudyTitle}>{series?.title}</h1>

        <div
          style={{
            gridTemplateRows: `${seriesOver ? "1fr" : "1fr 1fr"}`,
          }}
          className={styles.studyInfoDetails}
        >
          <span className={styles.teacherContainer}>
            <div className={styles.teacherContainerPhoto}>
              {series?.teacher ? (
                <span className={styles.photo}>
                  <Image
                    alt=""
                    src={`${sanityUrlFor(series.teacher.image)
                      .width(100)
                      .height(150)}`}
                    layout="intrinsic"
                    width={100}
                    height={150}
                  />
                </span>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#66788d"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </>
              )}
            </div>
            <span className={styles.supportingText}>Taught by</span>
            {series?.teacher?.name ?? "Guest Teacher"}{" "}
          </span>
          {seriesOver && (
            <div className={styles.studyInfoDetailsLessons}>
              <h3>{lessons.length}</h3>
              <span className={styles.supportingText}>lessons</span>
            </div>
          )}
          {!seriesOver && (
            <>
              <div>
                <h5>Meeting Time</h5>
                {!series?.meetingTime?.secondServiceTime ? ( //if there's no second service show only first service
                  <p>{` ${series?.meetingTime?.day}s at ${series?.meetingTime?.time}`}</p>
                ) : (
                  <p>{` ${series?.meetingTime?.day}s at ${series?.meetingTime?.time} and ${series?.meetingTime.secondServiceTime}`}</p>
                )}
              </div>
              <div>
                <h5>Location</h5>
                <p>{series?.location}</p>
              </div>
              <div>
                <h5>Childcare</h5>
                <p>
                  {series.childcareProvided ? (
                    <>
                      Childcare is provided
                      <Link
                        style={{ display: "block" }}
                        href="/ministries/childrens-ministry"
                      >
                        <a>Learn More</a>
                      </Link>
                    </>
                  ) : (
                    "None"
                  )}
                </p>
              </div>
            </>
          )}
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionBody}>{series?.description}</p>
        </div>
      </div>

      <div className={styles.lessonList}>
        <h3 className={styles.lessonListTitle}>Lessons</h3>
        {lessons.map((lesson, index) => {
          //render lesson block only if there's a meaningful content
          return hasContent(lesson) && <LessonBlock key={index} {...lesson} />;
        })}
      </div>
    </div>
  );
}
