import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getVideos, getDocumentIds, buildLessons } from "../util/index";
import { Link, useParams } from "react-router-dom";

import Content from "../content/study-content";

export default function StudyPage() {
  let { studyId } = useParams();

  //using the url param to search through studies and grab the right one
  const study = Content.studies.find((study) => study.url == studyId);

  //make a call to vimeo ✅
  //make a call to dropbox ✅
  //combine lessons ✅
  //render lessons in a list
  //figure out how to use the lessons after they resolve

  const videos = getVideos(study.vimeoFolder); //videos at data.data
  const documents = getDocumentIds(study.dropBoxFolder); //docs at data.entries

  const lessons = Promise.all([videos, documents]).then((values) => {
    return buildLessons(values[0], values[1]);
  });

  return (
    <div>
      <div className="study-container">
        <div className="description">
          <h3 className="description-title">{study.name}</h3>
          <p className="description-body">Study Description</p>
        </div>
        <div className="lesson-list">
          <h3 className="lesson-list-title">Available Lessons</h3>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
