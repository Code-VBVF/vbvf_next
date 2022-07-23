import React, { useEffect, useState } from "react";
import styles from "../css/sermonRedirect.module.scss";
import VbvfLogo from "../public/images/logos/vbvf_logo_full.png";
import VbvmiLogo from "../public/images/logos/vbvmi_logo.png";
import Arrow from "../public/images/arrow-thick-right.svg";
import Button from "../../components/button";

const SermonRedirect = (props) => {
  const [counter, setCounter] = useState("10");
  const navigate = useNavigate(-1);
  useEffect(() => {
    counter >= 1
      ? setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      : verseByVerseRedirect("https://www.versebyverseministry.org/");
  }, [counter]);

  function verseByVerseRedirect() {
    window.location.replace(`https://www.versebyverseministry.org/`);
  }

  return (
    <div className={styles.redirect}>
      <div className={styles.redirectDesc}>
        <h1>You are now leaving Verse by Verse Fellowship</h1>
        <p>
          You're being transferred to Verse by Verse Ministry's website. Please
          click the cancel button below if you would like to stay here.
        </p>
      </div>

      <div className={styles.redirectButtons}>
        <Button
          size="large"
          color="red"
          buttonFunc={() => navigate(-1)}
          title="Stay Here"
        />
        <Button
          size="large"
          color="green"
          buttonFunc={() => verseByVerseRedirect()}
          title="Proceed"
        />
      </div>
      <div className="redirect-images">
        <Image
          layout={"intrinsic"}
          width={376}
          height={278.13}
          alt=""
          src={VbvfLogo}
        />
        <Image
          layout={"intrinsic"}
          width={150.39}
          height={150.39}
          id="arrow"
          alt=""
          src={Arrow}
        />
        <Image
          layout={"intrinsic"}
          width={294}
          height={196.7}
          alt=""
          src={VbvmiLogo}
        />
      </div>
    </div>
  );
};

export default SermonRedirect;
