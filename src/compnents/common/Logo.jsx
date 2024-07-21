import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";
export default function Logo(props) {
  let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);
  return (
    <div>
      			{link ? <Link to="/">{imageElement}</Link> : imageElement}

    </div>
  )
}
