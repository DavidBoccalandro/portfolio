import React from 'react';
import Description from '../components/Description';
import AboutImg from '../assets/images/DavePlatensenegra.JPG';
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import Contact from '../components/Contact';
import CV from '../assets/images/David Boccalandro.pdf';

const AboutStyles = styled.div`
	padding: 20rem 0 0 0;

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
	.aboutSection__buttons {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-top: 2rem;
	}
	.button-dark {
		cursor: pointer;
		margin-top: 2rem;
		.button-dark {
			background: linear-gradient(rgba(0, 0, 0, 0.486), rgba(59, 16, 54, 0.75));
			box-shadow: rgb(17, 10, 9);
			font-size: 2.2rem;
			background-color: ${(props) => (props.outline ? 'transparent' : 'var(--pink)')};
			padding: 0.7em 2em;
			border-radius: 8px;
			display: inline-block;
			border: 2px solid var(--gray-1);
			color: ${(props) => (props.outline ? 'var(--gray-1)' : 'white')};
		}
		.button-dark:hover {
			background-color: #000000;
			color: white;
			box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 10rem rgba(239, 71, 101, 0.5),
				0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
		}
	}

	.button-light {
		cursor: pointer;
		margin-top: 2rem;
		.button-light {
			background: linear-gradient(rgba(0, 0, 0, 0.486), rgba(59, 16, 54, 0.75));
			box-shadow: rgb(17, 10, 9);
			font-size: 2.2rem;
			background-color: transparent;
			padding: 0.7em 2em;
			border-radius: 8px;
			display: inline-block;
			border: 2px solid var(--gray-1);
			color: var(--gray-1);
		}
		.button-light:hover {
			background-color: #000000;
			color: white;
			box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 10rem rgba(239, 71, 101, 0.5),
				0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
		}
	}
	.button-resp {
		display: none;
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
		.aboutSection__buttons {
			display: flex;
			flex-direction: column;
			gap: 0;
		}
		.button-dark {
			display: none;
		}
		.button-light {
			display: none;
		}
		.button-resp {
			font-size: 1.8rem;
			padding-bottom: 3rem;
			width: 100%;
			display: flex;
			cursor: pointer;
			margin-top: 2rem;
			.button-resp {
				background: linear-gradient(rgba(0, 0, 0, 0.486), rgba(59, 16, 54, 0.75));
				box-shadow: rgb(17, 10, 9);
				font-size: 2.2rem;
				background-color: transparent;
				padding: 0.7em 2em;
				border-radius: 8px;
				display: inline-block;
				border: 2px solid var(--gray-1);
				color: var(--gray-1);
			}
			.button-resp:hover {
				background-color: #000000;
				color: white;
				box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5), -0.125rem -0.125rem 10rem rgba(239, 71, 101, 0.5),
					0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
			}
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
							I am <span>David</span>
						</p>
						<h2 className="about__heading">FrontEnd - FullStack Web Developer</h2>
						<div className="about__info">
							<Description>
								Ever since I was a child, I believed that programming was the profession of the future. However, when I
								finished high school, I couldn't pursue programming due to the lack of access to a computer.
								<br />
								<br />
								Instead, I gained experience in administration, a background that still informs my work today. When I
								reconnected with programming, I discovered that I have a natural aptitude for learning quickly, being
								organized, and communicating effectively. These skills have greatly contributed to my growth as a
								programmer.
								<br />
								<br />
								My vision is to continuously embrace challenges beyond my comfort zone, while my mission is to never
								give up and consistently strive for personal growth through continuous learning.
							</Description>
						</div>
						<div className="aboutSection__buttons">
							<a href={CV} target="_blank" rel="noreferrer" className="button-dark">
								<button className="button-dark" type="button">
									Open CV
								</button>
							</a>
							<a href={CV} download="David Boccalandro" className="button-light">
								<button className="button-light" type="button">
									Download CV
								</button>
							</a>
							<a href={CV} target="_blank" rel="noreferrer" className="button-resp">
								<button className="button-resp" type="button">
									Get CV
								</button>
							</a>
						</div>
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
							items={['Henry Bootcamp || Oct 2021 - Mar 2022']}
						></AboutInfoItem>
						<AboutInfoItem
							title="Programming"
							items={['Universidad Tecnológica Nacional || 2011 - 2012']}
						></AboutInfoItem>
						<AboutInfoItem
							title="Business Administration"
							items={['Universidad de Buenos Aires || 2020 - 2022']}
						></AboutInfoItem>
					</div>
					<div className="about__info__item">
						<h1 className="about__info__heading">Hard Skills</h1>
						<AboutInfoItem title="Languages" items={['JavaScript', 'TypeScript']}></AboutInfoItem>
						<AboutInfoItem
							title="Front End"
							items={[
								'HTML',
								'CSS',
								'Sass',
								'React',
								'Redux',
								'Angular',
								'NgRx',
								'RxJS',
								'Tailwind',
								'Bootstrap',
								'Angular Material',
								'Ant Design',
							]}
						></AboutInfoItem>
						<AboutInfoItem title="Back End" items={['Node.js', 'Express']}></AboutInfoItem>
						<AboutInfoItem title="Database" items={['SQL', 'PostgreSQL', 'Sequelize', 'MongoDB']}></AboutInfoItem>
						<AboutInfoItem
							title="Unit Testing"
							items={['Jest', 'React Testing Library', 'Jasmine', 'Karma']}
						></AboutInfoItem>
						<AboutInfoItem
							title="Aditional Tools and Tech"
							items={[
								'Git',
								'Socket.io',
								'Storybook',
								'Multer',
								'Jira',
								'Trello',
								'Github',
								'Gitlab',
								'BitBucket',
								'Others..',
							]}
						></AboutInfoItem>
						<AboutInfoItem title="Expertise" items={['React', 'Angular']}></AboutInfoItem>
					</div>
					<div className="about__info__item">
						<h1 className="about__info__heading">Soft Skills</h1>
						<AboutInfoItem
							title="Love for challenges"
							items={['Curiosity', 'Persistent', 'Passion for Learning']}
						></AboutInfoItem>
						<AboutInfoItem title="Team Player" items={['Assertive communication', 'Collaborative']}></AboutInfoItem>
						<AboutInfoItem
							title="Adaptation to change"
							items={['Flexibility', 'Problem-solving', 'Analytical Thinking']}
						></AboutInfoItem>
					</div>
					<div className="about__info__item">
						<h1 className="about__info__heading">Experience</h1>
						<AboutInfoItem
							title="Front End Developer - Angular & React"
							items={['Applaudo || Apr 2022 - to date']}
						></AboutInfoItem>
						<AboutInfoItem
							title="Full Stack Mentor"
							items={['Bootcamp Soy Henry || Jan 2023 - to date']}
						></AboutInfoItem>
						<AboutInfoItem title="Back End Tutor" items={['Coderhouse || Mar 2022 - to date']}></AboutInfoItem>
						<AboutInfoItem
							title="Full Stack Teaching Assistant"
							items={['Bootcamp Soy Henry || Apr 2022 - Jul 2022']}
						></AboutInfoItem>
						<AboutInfoItem
							title="Full Stack Teaching Assistant for Reviews"
							items={['Bootcamp Soy Henry || Jan 2022 - Mar 2022']}
						></AboutInfoItem>
					</div>
					<div className="about__info__item">
						<h1 className="about__info__heading">Background Experience</h1>
						<AboutInfoItem
							title="BackOffice Analyst Sr."
							items={['Martinez de Alzaga || Aug 2015 - Sep 2021']}
						></AboutInfoItem>
						<AboutInfoItem
							title="Call Center Supervisor"
							items={['Martinez de Alzaga || May 2015 - Jul 2015']}
						></AboutInfoItem>
					</div>
				</div>
			</div>
			<Contact />
		</AboutStyles>
	);
}

export default About;
