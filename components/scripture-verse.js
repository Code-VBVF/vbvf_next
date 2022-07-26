import React from "react";
import styles from "../css/scripture-verse.module.scss";
import PortableText from "@sanity/block-content-to-react";
import { serializers } from "../util/sanity-serializers";

export default function ScriptureVerse(props) {
  return (
    <div className={styles.scripture}>
      <PortableText
        renderContainerOnSingleChild={true}
        className={styles.scriptureVerse}
        blocks={props.verse}
        serializers={serializers}
      />
      <h3 className={styles.scriptureReference}>{props.reference}</h3>
    </div>
  );
}
