import React from "react";
import Button from "./Button";
import Description from "./Description";
import SectionTitle from "./SectionTitle";
import AboutImg from "../assets/images/originalMeB.png";
import styled from "styled-components";

const AboutStyle = styled.div`
	padding: 5rem 0;
	.container {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		text-align: center;
	}
	.about__left,
	.about__right {
		flex: 1;
		padding: 2rem;
	}
	.section-title {
		text-align: center;
	}
	.paragraph {
		margin-top: 2rem;
		margin-left: 0;
	}
	.aboutSection__buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin-top: 2rem;
	}

	@media only screen and (max-width: 950px) {
		.about__left {
			flex: 4;
		}
		.about__right {
			flex: 3;
		}
	}

	@media only screen and (max-width: 768px) {
		.container {
			flex-direction: column;
		}
		.about__left,
		.about__right {
			width: 100%;
		}
		.about__right {
			margin-top: 3rem;
		}
		.aboutSection__buttons {
			flex-direction: column;
			gap: 0;
			.button-wrapper,
			a {
				width: 100%;
			}
		}
	}
`;

function About() {
	return (
		<AboutStyle>
			<div className="container">
				<div className="about__left">
					<SectionTitle
						subheading="Let me introduce myself"
						heading="About me"
					/>
					<Description>
						When I am coding, my motivation is my family, and it is as if did it
						for them. In my spare time, I usually play with my daughter or, if I
						am not slapping the keyboard, I am slapping my favorite instrument,
						the bass!
					</Description>
					<div className="aboutSection__buttons">
						<Button btnLink="/projects" btnText="Works" />
						<Button btnLink="/about" btnText="Read More" outline />
					</div>
				</div>
				<div className="about__right">
					<img src={AboutImg} alt="" />
				</div>
			</div>
		</AboutStyle>
	);
}

export default About;
