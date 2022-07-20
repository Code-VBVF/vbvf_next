import React, { useState } from "react";
import { isOver, livestreamHappeningNow } from "../src/util/index";
import Link from "next/link";

import Stream from "../src/components/stream";
import { sanity } from "../src/util/index";
import styles from "../src/css/livestream.module.scss";
import MemorialService from "../src/components/memorial-service";

var sortBy = require("lodash.sortby");

export async function getStaticProps() {
  if (livestreamHappeningNow() === null) {
    const previousServiceVideos = await fetch(
      `https://api.vimeo.com/me/projects/${process.env.VIMEO_FOLDER}/videos?direction=desc`,
      {
        headers: {
          Authorization: process.env.VIMEO_KEY,
        },
      }
    );
    const previousVideos = await previousServiceVideos.json();
    return { props: { previousVideos } };
  } else {
    const query = `{'wednesdaySeries': *[_type == "series" && meetingTime.day == "Wednesday" && endDate > now()]{
  title,
  description,
  endDate,
  isVbvmiStudy,
  'notesUrl': lessons|order(lessonNumber desc)[0].notes.asset->url,
  'questionUrl':lessons|order(lessonNumber desc)[0].questions.asset->url},
'sundaySeries': *[_type == "series" && meetingTime.day == "Sunday" && endDate > now()]{
  title,
  description,
  endDate,
  isVbvmiStudy,
  'notesUrl': lessons|order(lessonNumber desc)[0].notes.asset->url,
  'questionUrl':lessons|order(lessonNumber desc)[0].questions.asset->url
}}`;

    const res = await sanity.fetch(query);

    return {
      props: {
        data: res,
      },
    };
  }
}

export default function Livestream({ data, previousVideos }) {
  const [wednesdaySeries, setWednesdaySeries] = useState(
    data?.wednesdaySeries[0]
  );
  const [sundaySeries, setSundaySeries] = useState(data?.sundaySeries[0]);
  const [sundayArchiveVideos, setSundayArchiveVideos] = useState(
    previousVideos?.data ?? null
  );
  console.log(data);
  const streamArchive = () => {
    const sortedVideos = sortBy(
      sundayArchiveVideos,
      "last_user_action_event_date"
    )
      .reverse()
      .slice(0, 3);
    return sortedVideos.map((video) => (
      <>
        <h3>{video.name}</h3>
        <div
          className={styles.livestreamArchiveVideoPlayer}
          dangerouslySetInnerHTML={createMarkup(video)}
        ></div>
      </>
    ));
  };

  function createMarkup(video) {
    return { __html: video.embed?.html };
  }

  return (
    <div className={styles.livestream}>
      <h1>Livestream</h1>

      {livestreamHappeningNow() === "wednesday" ? ( //if it's wednesday return the active series happening on wednesday
        <Stream
          streamUrl="https://vimeo.com/event/49116/embed"
          title={wednesdaySeries.title}
          description={wednesdaySeries.description}
          seriesLink={`/bible-studies/${wednesdaySeries.title}`}
          notesUrl={wednesdaySeries.notesUrl}
          questionUrl={wednesdaySeries.questionUrl}
        />
      ) : livestreamHappeningNow() === "sunday" ? ( //return sunday stream
        <Stream
          streamUrl="https://vimeo.com/event/51649/embed"
          title={sundaySeries.title}
          description={sundaySeries.description}
          seriesLink={`/bible-studies/${sundaySeries.title}`}
          notesUrl={sundaySeries.notesUrl}
          questionUrl={sundaySeries.questionUrl}
        />
      ) : livestreamHappeningNow() === "memorial" ? ( // environment variable is memorial
        // return memorial service

        <MemorialService />
      ) : livestreamHappeningNow() === "guestTeacher" ? ( //returning component with no description for guest teacher
        <Stream
          streamUrl="https://vimeo.com/event/51649/embed"
          title=""
          description=""
        />
      ) : livestreamHappeningNow() === "christmas" ? ( //returning component with no description for guest teacher
        <Stream
          streamUrl="https://vimeo.com/event/51649/embed"
          title="Christmas Eve Service"
          description="Luke 2:22-35"
        />
      ) : (
        //return livestream archive
        <div className={styles.livestreamArchive}>
          <div>
            <p>
              Verse by Verse Fellowship livestreams its Sunday services. While
              there's not a service streaming right now, please feel free to
              check out some of our recent services below. Recordings of our
              services are available on our{" "}
              <Link href="/bible-studies">
                <a>Bible Studies</a>
              </Link>{" "}
              page.
            </p>
          </div>
          {streamArchive()}
        </div>
      )}
    </div>
  );
}
