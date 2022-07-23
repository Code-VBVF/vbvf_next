import React, { useState } from "react";
import { sanity } from "../src/util/index";
import PortableText from "@sanity/block-content-to-react";
import { format } from "date-fns";
import styles from "../src/css/announcements.module.scss";
import FrequentlyAskedQuestions from "../src/components/frequently-asked-questions";

export async function getStaticProps() {
  const query = `{'announcement': *[_type == "biWeeklyAnnouncements" ] | order(_createdAt desc) [0], 'faq':*[_type == "page" && title == "About Page"]{faq} }`;
  const res = await sanity.fetch(query);

  return { props: { data: res } };
}
export default function WhatsHappening({ data }) {
  const [announcement, setAnnouncement] = useState(data.announcement);
  const [noAnnouncement, setNoAnnouncement] = useState(false);
  const [faqs, setFaqs] = useState(data.faq[0].faq.faqs);

  return (
    <div className={styles.announcements}>
      {noAnnouncement ? (
        <>
          <p>Looks like there's no announcements.</p>
          <p>
            Please try again later. In the meantime, check out our FAQs below.
          </p>
        </>
      ) : (
        <>
          <h5>{format(new Date(announcement._createdAt), "PPP")}</h5>
          <h1>VBVF Announcements</h1>
          <div className={styles.announcementsVideo}>
            <iframe
              allowFullScreen
              title={announcement._id}
              src={`https://player.vimeo.com/video/${announcement.videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=175387`}
            ></iframe>
          </div>
          <div className={styles.announcementsText}>
            <PortableText blocks={announcement?.text} />
          </div>
        </>
      )}
      {/* <UpcomingEvents /> */}
      <div className={styles.announcementsServiceTimes}>
        <h2>Service times</h2>
        <div className={styles.announcementsServiceTimesInfo}>
          <div>
            <h3>Tuesday</h3>
            <p>
              Women's Bible Study <br /> 10:00am - Sanctuary <br />
            </p>
          </div>
          <div>
            <h3>Wednesday</h3>
            <p>
              Mid-week Bible Study <br /> 7:00pm - Sanctuary <br />
            </p>
          </div>
          <div>
            <h3>Sunday</h3>
            <p>
              Worship Service <br />
              9:00am & 11:00am - Sanctuary <br />
            </p>
          </div>
        </div>
      </div>
      <div className={styles.announcementsFaq}>
        <h2>General FAQs</h2>
        <FrequentlyAskedQuestions faq={faqs.slice(0, 4)} layout="compact" />
      </div>
    </div>
  );
}
