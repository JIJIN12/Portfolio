import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../compnents/common/NavBar";
import Footer from "../compnents/common/Footer";
import Logo from "../compnents/common/Logo";
import Socials from "../compnents/about/Social";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");
  return (
    <div>
      <Helmet>
        <title>{`About | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              <div className="about-right-side">
                <div className="title about-title">{INFO.about.title}</div>

                <div className="subtitle about-subtitle">
                  {INFO.about.description}
                </div>
                <div style={{margin:'2rem 0'}}>
                  <div style={{fontSize:'2.5rem', fontWeight:'600',fontFamily:'var(--secondary-font)', color:'var(--primary-color)'}}>Education</div>
                  <div className="edu-stubtitle">B.E CSE (2019 - 2023)</div>
                  <div className="edu-stubtitle"> Sri Krishna College of Technology, Coimbatore </div>
                </div>
              </div>

              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src="about.jpg" alt="about" className="about-image" />
                  </div>
                </div>

                <div className="about-socials">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="about-socials-mobile">
              <Socials />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
