import React from "react";
import FacebookLogo from "../public/images/logos/facebook_logo.png";
import InstagramLogo from "../public/images/logos/instagram_logo.png";
import styles from "../css/footer.module.scss";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Follow VBVF Online</p>
      <div className={styles.footerIcons}>
        <a href="https://www.facebook.com/vbvfellowship/">
          <Image
            height={50}
            width={50}
            src={FacebookLogo}
            alt="Facebook Logo"
          />
        </a>
        <a href="https://www.instagram.com/versebyversefellowship/">
          <Image
            height={50}
            width={50}
            src={InstagramLogo}
            alt="Instagram Logo"
          />
        </a>
      </div>
      <ul className={styles.footerDisclosures}>
        <li>
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </li>
        <li>
          <Link href="/terms-and-conditions">
            <a>Terms and Conditions</a>
          </Link>
        </li>
      </ul>
      <p className={styles.footerCopyright}>
        &#169; {new Date().getFullYear()} Verse By Verse Fellowship
      </p>
      {useRouter().pathname === "/" && (
        <Link href="https://www.sanity.io">
          <a id="sanity-link">Structured content powered by Sanity.io</a>
        </Link>
      )}
    </div>
  );
};

export default Footer;
