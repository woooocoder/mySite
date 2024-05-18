import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";


const Resume = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "resume");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Resume | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="mt-12">
				<NavBar active="resume" />
				<div className="content-wrapper">
					<div className="articles-logo">
						<Logo width={46} />
					</div>

					<div className="title mt-12">
						View and download my resume
					</div>

					<div className="container p-[10%] border-2 rounded-lg">
						<div className="header">
							<ul>
								<li>
									{ INFO.main.name }
								</li>
								<li>
									Haverhill, MA
								</li>
								<li>
									### ### ####
								</li>
								<li>
									<a className="text-blue-500 underline">
										{ INFO.main.email }
									</a>
								</li>
								<li>
									Github: 
									<a className="text-blue-500 underline ml-2">
										github.com/woooocoder
									</a>
								</li>
							</ul>
						</div>

						<div className="position flex justify-center my-[2%]">
							<p className="font-bold text-xl">Full Stack Web Developer</p>
						</div>

						<div className="skills mb-[4%]">
							<h2 className="font-bold text-lg mb-1">
								Skills
							</h2>

							<p>
								MongoDB | Express.js | React | SQL | Excel | Flask | Java Spring Boot | Heroku | Firebase | WordPress | Figma  
							</p>
						</div>

						<div className="experience mb-[4%]">
							<h2 className="font-bold text-lg mb-[1%]">Experience</h2>
							<div className="job1">
								<p className="text-sm">02/2020-05/2024</p>
								<div className="flex">
									<h2 className="font-semibold">
										Reese Phone Repair, New England
									</h2>

									<h2 className="ml-1 italic">- Phone Repair Technician</h2>
								</div>
								<ul className="list-disc ml-[10%] my-[2%]">
									<li className="mb-2">
										Generated $28,000 in online sales for a digital phone repair course through 2023, 
										leveraging expertise in phone repair, sourcing, advertising and reselling
									</li>

									<li className="mb-2">
										Sourced phones online and locally through social media sites  and markets; sold
										to international direct buyers, averaging $4,000 in monthly transactions through 2023. 
									</li>

									<li>
										Gained proficiency using Canva, WordPress, Shopify, Google Ads, Google My Business, 
										and Meta Ads Manager to manage and grow the business.
									</li>
								</ul>
							</div>

							<div className="job2">
								<p className="text-sm">06/2022-04/2024</p>
								<div className="flex">
									<h2 className="font-semibold">
										Aroma Joe's, Haverhill, MA
									</h2>

									<h2 className="ml-1 italic">- Barista</h2>
								</div>
								<ul className="list-disc ml-[10%] my-[2%]">
									<li className="mb-2">
										Handled and troubleshooted POS systems (Toast) 
									</li>

									<li className="mb-2">
										Provided exceptional customer service for up to 200 customers per hour
									</li>
								</ul>
							</div>
						</div>

						<div className="projects mb-[4%]">
							<h2 className="font-bold text-lg mb-[1%]">Projects</h2>

							<div className="mySite mb-0.5">
								<div className="flex">
									<h2 className="font-semibold">
										My Website -
									</h2>
									<h2>
										<a 
											className="ml-1 text-blue-500"
											href="https://woooocoder.github.io/mySite/">
											Link
										</a>
									</h2>
								</div>
							</div>
							<div className="boulderflash mb-0.5">
								<div className="flex">
									<h2 className="font-semibold">
										Boulder Flash (Work in Progress) -
									</h2>

									<a 
										className="text-blue-500 ml-1"
										href="https://cs615-eaa412a1261d.herokuapp.com/"
									>
										Link
									</a>
								</div>

								<p>
									Full stack web app used to rate campsites around the world (like Yelp). 
									Design implementations include form validation, auth, routing, deployment, 3rd party APIs, boilerplates, and more.
								</p>
							</div>
							
							<div className="yelpcamp mb-0.5">
								<div className="flex">
									<h2 className="font-semibold">
										YelpCamp -
									</h2>

									<a 
										className="text-blue-500 ml-1"
										href="https://mighty-earth-55463-b132356ca8f0.herokuapp.com/"
									>
										Link
									</a>
								</div>

								<p>
									Full stack web app used to rate campsites around the world (like Yelp). 
									Design implementations include form validation, auth, routing, deployment, 3rd party APIs, boilerplates, and more.
								</p>
							</div>
						</div>

						<div className="education">
							<h2 className="font-bold text-lg">Education</h2>
							<p className="text-sm">09/2020-12/2024 exp.</p>
							<div className="flex">
									<h2 className="font-semibold">
										University Of Massachusetts - Boston -
									</h2>

									<h2 className="ml-1">
										B.S Computer Science
									</h2>
							</div>

							<ul className="list-disc ml-[10%]">
								<li>
									Computer Science Club
								</li>

								<li>
									Chess Club
								</li>

								<li>
									CS615 - UI Design
								</li>

								<li>
									CS410 - Software Engineering
								</li>
							</ul>
						</div>
					</div>


					<div className="flex justify-center w-full">
						<a
							href='./resume.pdf'
							download='resume.pdf' 
							className="rounded-xl shadow-md w-min px-4 py-1 mt-6 font-semibold hover:text-[#14b8a6]"
						>
							Download
						</a>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Resume;
