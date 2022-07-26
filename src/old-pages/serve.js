import React, { useState, useEffect } from "react";
import styles from "../css//serve.module.scss";
import { serializers } from "../../util/sanity-serializers";
import Ben from "../images/serve/ben_coffee.jpg";
import Cathy from "../images/serve/cathy_greeting.jpg";
import KidsMinistry from "../images/serve/kids_ministry.jpg";
import Levi from "../images/serve/levi_setup.jpg";
import John from "../images/serve/john_praying.jpg";
import { sanity } from "../../util/index";
import PortableText from "@sanity/block-content-to-react";
import ScriptureVerse from "../../components/scripture-verse";
import Button from "../../components/button";
import { Spinner } from "reactstrap";

export async function getStaticProps() {
  const query = `*[_type == "page" && title == "Serve"]{
    paragraphs,
    scripture,
  }`;

  const res = await sanity.fetch(query);
  return { props: { data: res[0] } };
}
export default function Serve() {
  const [pageData, setPageData] = useState([]);

  return (
    <div className="serve-container">
      <div className="serve-photo-collage">
        <div id="top-row">
          <img id="kids" src={KidsMinistry} alt="serving at the coffee bar" />
          <img id="ben" src={Ben} alt="serving at the coffee bar" />
        </div>
        <div id="bottom-row">
          <div id="title-block">
            <h1>Serve Together</h1>
            <img id="levi" src={Levi} alt="serving at the coffee bar" />
          </div>
          <img id="cathy" src={Cathy} alt="serving at the coffee bar" />
        </div>
      </div>
      <div className="serve-photo-collage-mobile">
        <h1>Serve Together</h1>
      </div>

      {pageDataIsLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="first-row">
            <PortableText
              renderContainerOnSingleChild={true}
              className="first-row-paragraph"
              blocks={pageData.paragraphs[0].bodyText}
              serializers={serializers}
            />

            <ScriptureVerse
              verse={pageData.scripture.verseText[0]}
              reference={pageData.scripture.reference}
            />
          </div>

          <div className="second-row">
            <div className="button-section">
              <PortableText
                renderContainerOnSingleChild={true}
                className="second-row-paragraph"
                blocks={pageData?.paragraphs[1].bodyText}
                serializers={serializers}
              />
              <div className="button-wrapper">
                <Button
                  size="large"
                  color="green"
                  title="Get Involved"
                  link="https://vbvf.churchcenter.com/people/forms/33404?open-in-church-center-modal=true"
                />
              </div>
            </div>
            <img src={John} alt="volunteer praying with children" />
          </div>
        </>
      )}
    </div>
  );
}
