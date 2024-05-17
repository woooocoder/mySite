import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./phone.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Reese Phone Repair</div>
							<div className="work-subtitle">
								Self-Employed Phone Repair Technician
							</div>
							<div className="work-duration">2019-2024</div>
						</div>

						<div className="work">
							<img
								src="./ajs.png"
								alt="AJs"
								className="work-image"
							/>
							<div className="work-title">Aroma Joe's</div>
							<div className="work-subtitle">
								Barista
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
