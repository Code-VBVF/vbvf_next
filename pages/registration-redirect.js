import React, { useEffect, useState } from "react";
import styles from "../src/css/sermonRedirect.module.scss";
import VbvfLogo from "../public/images/logos/vbvf_logo_full.png";
import RegistrationsLogo from "../public/images/logos/registrations_logo.png";
import Arrow from "../public/images/arrow-thick-right.svg";
import Button from "../src/components/button";
import { useRouter } from "next/router";
import Image from "next/image";

const RegistrationRedirect = (props) => {
  const [counter, setCounter] = useState("10");
  const router = useRouter();

  useEffect(() => {
    counter >= 1
      ? setTimeout(() => {
          setCounter(counter - 1);
        }, 1000)
      : redirect();
  }, [counter]);

  function redirect(path) {
    window.location.replace(
      `https://vbvf.churchcenter.com/registrations/events`
    );
  }

  return (
    <div className={styles.redirect}>
      <div className={styles.redirectDesc}>
        <h1>You are now leaving Verse by Verse Fellowship</h1>
        <p>
          You're being transferred to our event portal. When you're finished,
          you may hit the back button to come back to Verse by Verse
          Fellowship's site. Please click the cancel button below if you would
          like to stay here.
        </p>
      </div>
      <div className={styles.redirectButtons}>
        <Button
          size="large"
          color="red"
          buttonFunc={() => router.back()}
          title="Stay Here"
        />{" "}
        <Button
          size="large"
          color="green"
          buttonFunc={() => redirect()}
          title="Proceed"
        />
      </div>
      <div className={styles.redirectImages}>
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
          width={348}
          height={53.129}
          alt=""
          src={RegistrationsLogo}
        />
      </div>
    </div>
  );
};

export default RegistrationRedirect;
