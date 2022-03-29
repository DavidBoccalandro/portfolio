import React from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import AboutImg from "../assets/images/DavePlatensenegra.JPG";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import Contact from "../components/Contact";

const AboutStyles = styled.div`
	padding: 20rem 0 10rem 0;

	.top-section {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	.left {
		flex: 3;
	}
	.right {
		flex: 2;
		img {
			border: 2px solid var(--gray-1);
		}
	}
	.about__subheading {
		font-size: 2.2rem;
		margin-bottom: 2rem;
		span {
			background-color: var(--black);
			color: var(--white);
			padding: 0.5rem;
			border-radius: 8px;
		}
	}
	.about__heading {
		font-size: 3.6rem;
		margin-bottom: 3rem;
	}
	.about__info {
		margin-bottom: 4rem;
		.para {
			max-width: 100%;
		}
	}
	.about__info__items {
		margin-top: 15rem;
	}
	.about__info__item {
		margin-bottom: 10rem;
	}
	.about__info__heading {
		font-size: 3.6rem;
		text-transform: uppercase;
	}

	@media only screen and (max-width: 768px) {
		padding: 10rem 0;
		.top-section {
			flex-direction: column;
			gap: 5rem;
		}
		.about__subheading {
			font-size: 1.8rem;
		}
		.about__heading {
			font-size: 2.8rem;
		}
		.about__info__heading {
			font-size: 3rem;
		}
	}
`;

function About() {
	return (
			<AboutStyles>
				<div className="container">
					<div className="top-section">
						<div className="left">
							<p className="about__subheading">
								Hi, I am <span>David</span>
							</p>
							<h2 className="about__heading">A FullStack Web Developer</h2>
							<div className="about__info">
								<Description>
									Since I was a child, I thought that programming was the job of
									the future. When I left high school I was going to dedicate
									myself to programming and I left it because I didn't have a
									computer.
									<br />
									<br />
									I have experience in administration, a background that currently
									guides me: when I reconnected with programming I noticed that I
									find it easy to learn quickly, be organized, communicate. Skills
									that have helped me become a good programmer.
									<br />
									<br />
									My vision is always to accept challenges outside my comfort zone
									and my mission is to never give up but always grow without
									stopping learning.
								</Description>
							</div>
							<Button btnText="Download CV" btnLink="#" />
						</div>
						<div className="right">
							<img src={AboutImg} alt="David"></img>
						</div>
					</div>
					<div className="about__info__items">
						<div className="about__info__item">
							<h1 className="about__info__heading">Education</h1>
							<AboutInfoItem
								title="Full Stack Web Developer"
								items={["Henry Bootcamp || October 2021 - March 2022"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Programming"
								items={["Universidad Tecnológica Nacional || 2011 - 2012"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Business Administration"
								items={["Universidad de Buenos Aires || 2020 - 2022"]}
							></AboutInfoItem>
						</div>
						<div className="about__info__item">
							<h1 className="about__info__heading">Hard Skills</h1>
							<AboutInfoItem
								title="Languages"
								items={["JavaScript", "TypeScript"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Front End"
								items={["HTML", "CSS", "React", "Redux"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Back End"
								items={["Node.js", "Express"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Database"
								items={["SQL", "PostgreSQL", "Sequelize"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Aditional Tools and Tech"
								items={[
									"Git",
									"Github",
									"Socket.io",
									"Multer",
									"Others..",
								]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Learning"
								items={["MongoDB", "Angular"]}
							></AboutInfoItem>
						</div>
						<div className="about__info__item">
							<h1 className="about__info__heading">Soft Skills</h1>
							<AboutInfoItem
								title="Love for challenges"
								items={["Curiosity", "Persistent", "Passion to learn"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Team Player"
								items={["Assertive communication", "Collaborative"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Adaptation to change"
								items={[
									"Flexibility",
									"Problem resolution",
									"Analytical capacity",
								]}
							></AboutInfoItem>
						</div>
						<div className="about__info__item">
							<h1 className="about__info__heading">Experience</h1>
							<AboutInfoItem
								title="Back End Tutor"
								items={["Coderhouse || March 2022 - to date"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Full Stack Teaching Assistant"
								items={["Bootcamp Soy Henry || December 2021 - to date"]}
							></AboutInfoItem>
						</div>
						<div className="about__info__item">
							<h1 className="about__info__heading">Background Experience</h1>
							<AboutInfoItem
								title="BackOffice Analyst Sr."
								items={["Martinez de Alzaga || August 2015 - September 2021"]}
							></AboutInfoItem>
							<AboutInfoItem
								title="Call Center Supervisor"
								items={["Martinez de Alzaga || May 2015 - July 2015"]}
							></AboutInfoItem>
						</div>
					</div>
				</div>
				<Contact />
			</AboutStyles>
	);
}

export default About;
