import React, { useState, useEffect, useCallback } from "react";
// import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

import Logo from "../compnents/common/Logo";
import Footer from "../compnents/common/Footer";
// import Article from "../components/homepage/article";
import Works from "../compnents/homepage/Works";
import AllProjects from "../compnents/projects/AllProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
// import myArticles from "../data/articles";

import "./styles/homepage.css";
import NavBar from "../compnents/common/NavBar";
// import Article from "../compnents/homepage/Article";
export default function Homepage() {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = useCallback(() => {
    const scroll = window.pageYOffset;
    const newLogoSize = 80 - (scroll * 4) / 10;

    if (newLogoSize < logoSize) {
      if (newLogoSize > 40) {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      } else {
        setStayLogo(true);
      }
    } else {
      setLogoSize(newLogoSize);
      setStayLogo(false);
    }
  }, [logoSize]);
  useEffect(() => {
    const debounceScroll = () => {
      let timeoutId;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(handleScroll, 50);
      };
    };

    const debouncedHandleScroll = debounceScroll();
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, [handleScroll]);

  const currentSEO = SEO.find((item) => item.page === "home");

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };
  return (
    <div>
      <div className="page-content">
        <NavBar active="home" />
        <div className="content-wrapper">
          <div className="homepage-logo-container">
            <div style={logoStyle}>
              <Logo width={logoSize} link={false} />
            </div>
          </div>

          <div className="homepage-container">
            <div className="homepage-first-area">
              <div className="homepage-first-area-left-side">
                <div className="title homepage-title">
                  {INFO.homepage.title}
                </div>

                <div className="subtitle homepage-subtitle">
                  {INFO.homepage.description}
                </div>
              </div>

              <div className="homepage-first-area-right-side">
                <div className="homepage-image-container">
                  <div className="homepage-image-wrapper">
                    <img
                      src="IMG_3651.jpg"
                      alt="about"
                      className="homepage-image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="homepage-socials">
              <a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="homepage-social-icon"
                />
              </a>
              <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={INFO.socials.stackoverflow}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faStackOverflow}
                  className="homepage-social-icon"
                />
              </a>
              <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="homepage-social-icon"
                />
              </a>
              <a
                href={`mailto:${INFO.main.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className="homepage-social-icon"
                />
              </a>
            </div>

            <div className="homepage-projects">
              <AllProjects />
            </div>

            <div className="homepage-after-title">
              {/* <div className="homepage-articles">
                {myArticles.map((article, index) => (
                  <div className="homepage-article" key={index}>
                    <Article
                      date={article().date}
                      title={article().title}
                      description={article().description}
                      link={`/article/${index + 1}`}
                    />
                  </div>
                ))}
              </div> */}

              <div className="homepage-works">
                <Works />
              </div>
            </div>

            <div className="page-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
