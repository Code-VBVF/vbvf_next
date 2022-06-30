import React, { useState, useEffect } from "react";
import styles from "../../src/css/leadership.module.scss";
import { sanity, sanityUrlFor } from "../../src/util/index";
import PhotoTitle from "../../src/components/photo-title";

import AboutMenu from "../../src/components/about-menu";

export async function getServerSideProps() {
  const query = `{'elders': *[_type == "person" && (role == "Elder" || role == "Senior Pastor")] | order(name asc), 'pastors': *[_type == "person" && role == "Associate Pastor"] | order(name asc), 'directors': *[_type == "person" && role == "Ministry Director" || role == "Staff" || role == "Volunteer Staff"] | order(name asc)}`;
  const res = await sanity.fetch(query);
  const data = await res;
  console.log(data);
  return { props: { data } };
}
export default function leadership({ data }) {
  const [elders, setElders] = useState(data.elders);
  const [pastors, setPastors] = useState(data.pastors);
  const [directors, setDirectors] = useState(data.directors);

  return (
    <div className={styles.leadership}>
      <AboutMenu />
      <h1>Leadership</h1>
      <br />

      <h2>Elders</h2>
      <div className={styles.leadershipPhotoArray}>
        {elders?.map((elder) => (
          <PhotoTitle
            image={`${sanityUrlFor(elder?.image).width(300)}`}
            title={elder?.department}
            role={elder?.role}
            name={elder?.name}
          />
        ))}
      </div>

      <h2>Pastors</h2>
      <div className={styles.leadershipPhotoArray}>
        {pastors?.map((pastor) => (
          <PhotoTitle
            isLazy="lazy"
            photo={sanityUrlFor(pastor?.image).width(300)}
            title={pastor?.department}
            role={pastor?.role}
            name={pastor?.name}
            email={pastor?.email}
          />
        ))}
      </div>

      <h2>Ministry Directors & Staff</h2>

      <div className={styles.leadershipPhotoArray}>
        {directors?.map((director) => (
          <PhotoTitle
            isLazy="lazy"
            photo={sanityUrlFor(director?.image).width(300)}
            role={director?.role}
            title={director?.department}
            name={director?.name}
          />
        ))}
      </div>
    </div>
  );
}
