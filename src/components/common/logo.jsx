import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img 
			src={`${process.env.PUBLIC_URL}/logo.png`} //{INFO.main.logo}
			alt="logo" 
			className="block rounded-[50%] m-0 p-0" 
			width={width} 
		/>
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
