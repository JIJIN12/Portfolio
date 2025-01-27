import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/articles.css";
export default function Article() {
  const { title, description, date, link } = props;

  return (
    <div className="homepage-article">
      <div className="homepage-article-content">
        <div className="homepage-article-date">|&nbsp;&nbsp;&nbsp;{date}</div>
        <div className="homepage-article-title">{title}</div>
        <div className="homepage-article-description">{description}</div>
        <div className="homepage-article-link">
          <Link to={link}>
            Read article{" "}
            <FontAwesomeIcon
              style={{ fontSize: "10px" }}
              icon={faChevronRight}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
