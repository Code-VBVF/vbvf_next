import React from "react";
import Link from "next/link";
import styles from "../css/streamPage.module.scss";

import ConnectWidget from "../components/connect-widget";
import Button from "./button";

export default function Stream(props) {
  return (
    <div className={styles.stream}>
      <div className={styles.streamVideoPlayer}>
        <iframe
          title={props.title}
          src={props.streamUrl}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.streamSupportingMaterials}>
        <ConnectWidget />
        <div className={styles.streamSupportingMaterialsFromCms}>
          <h2>{props.title}</h2>
          {props.notesUrl && (
            <div className={styles.documents}>
              <Button
                title="Sermon Notes"
                size="md"
                color="green"
                buttonFunc={() => window.open(props.notesUrl)}
              />
              <Button
                title="Application Questions"
                size="md"
                color="green"
                buttonFunc={() => window.open(props.questionUrl)}
              />
            </div>
          )}
          <p>{props.description}</p>
          {props.seriesLink && (
            <Link href={props.seriesLink}>
              <a>Watch the rest of this series</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
