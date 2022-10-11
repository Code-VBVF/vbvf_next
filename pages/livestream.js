import React, { useState } from "react";
//import { livestreamHappeningNow } from "../util/index";
import Link from "next/link";

import Stream from "../components/stream";
import { sanity } from "../util/index";
import styles from "../css//livestream.module.scss";
import MemorialService from "../components/memorial-service";
import { DateTime } from "luxon";

export async function getServerSideProps() {
  // util function
  async function livestreamHappeningNow() {
    const nd = await DateTime.fromObject({}, { zone: "America/Chicago" });

    if (process.env.STREAM != "none") {
      return process.env.STREAM;
    } else {
      if (
        nd.day === 3 //wednesday
      ) {
        return "wednesday";
      } else if (
        nd.day === 0 //sunday
      ) {
        return "sunday";
      }
    }
    return null;
  }

  const whichStream = await livestreamHappeningNow();

  if (whichStream === null) {
    const previousServiceVideos = await fetch(
      `https://api.vimeo.com/me/projects/${process.env.VIMEO_FOLDER}/videos?sort=last_user_action_event_date&direction=desc&per_page=3`,
      {
        headers: {
          Authorization: process.env.VIMEO_KEY_UPDATED,
        },
      }
    );

    const previousVideos = await previousServiceVideos.json();

    return { props: { previousVideos: previousVideos.data, whichStream } };
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
        whichStream,
      },
    };
  }
}

export default function Livestream({ data, previousVideos, whichStream }) {
  const [wednesdaySeries, setWednesdaySeries] = useState(
    data?.wednesdaySeries[0]
  );

  const [sundaySeries, setSundaySeries] = useState(data?.sundaySeries[0]);

  const streamArchive = () => {
    return previousVideos.map((video) => (
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

      {whichStream === "wednesday" ? ( //if it's wednesday return the active series happening on wednesday
        <Stream
          streamUrl="https://vimeo.com/event/2282207/embed"
          title={wednesdaySeries.title}
          description={wednesdaySeries.description}
          seriesLink={`/bible-studies/${wednesdaySeries.title}`}
          notesUrl={wednesdaySeries.notesUrl}
          questionUrl={wednesdaySeries.questionUrl}
        />
      ) : whichStream === "sunday" ? ( //return sunday stream
        <Stream
          streamUrl="https://vimeo.com/event/2282202/embed"
          title={sundaySeries.title}
          description={sundaySeries.description}
          seriesLink={`/bible-studies/${sundaySeries.title}`}
          notesUrl={sundaySeries.notesUrl}
          questionUrl={sundaySeries.questionUrl}
        />
      ) : whichStream === "memorial" ? ( // environment variable is memorial
        // return memorial service

        <MemorialService />
      ) : whichStream === "guestTeacher" ? ( //returning component with no description for guest teacher
        <Stream
          streamUrl="https://vimeo.com/event/51649/embed"
          title=""
          description=""
        />
      ) : whichStream === "christmas" ? ( //returning component with no description for guest teacher
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
