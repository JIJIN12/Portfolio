import React, { useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/Card";
import facebookLogo from "../../../public/facebook.png"; // Assuming images are in the same directory
import twitterLogo from "../../../public/facebook.png"; // Assuming images are in the same directory
import "./styles/works.css";
export default function Works() {
  const workExperience = [
    {
      logo: facebookLogo,
      title: "Maitexa INFO Solution LLP (Internship)",
      subtitle: "MERN Stack Developer",
      duration: "Sept 2023 - Dec 2023",
    },
  ];
  const imgURL =
    "https://maitexa.com/public/web/images/meta-tag/og-image.png";

  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            {workExperience.map((work, index) => (
              <div className="work" key={index}>
                <img src={imgURL} alt={`${work.title} logo`} className="work-image" />
                <div className="work-title">{work.title}</div>
                <div className="work-subtitle">{work.subtitle}</div>
                <div className="work-duration">{work.duration}</div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}
