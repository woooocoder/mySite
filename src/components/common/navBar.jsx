import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const handleClassname = (prop) => {
		return (prop === active ? "nav-item active": "nav-item")
	}

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									handleClassname('home')
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									handleClassname('about')
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									handleClassname('projects')
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									handleClassname('resume')
								}
							>
								<Link to="/resume">Resume</Link>
							</li>
							<li
								className={
									handleClassname('contact')
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
