import React from "react";
import styled from "styled-components";
import projectImg from "../assets/images/family.jpeg";

const ProjectCardStyles = styled.div`
	.projectCard__img {
		width: 100%;
		height: 400px;
		overflow: hidden;
		border-radius: 12px;
		display: inline-block;
		border: 3px solid var(--gray-2);
		img {
			height: 100%;
		}
	}
	.projectCard__info {
		margin-top: 1rem;
		background-color: var(--black);
		padding: 1rem;
		border-radius: 12px;
	}
	.projectCard__title {
		font-size: 2.2rem;
	}
	.projectCard__description {
		font-size: 1.6rem;
		font-family: "RobotoMono Regular";
		margin-top: 1rem;
	}
	.projectButton {
		display: inline-block;
		font-size: 1.8rem;
		text-decoration: underline;
		margin: 2rem 0;
		color: royalblue;
	}
	.links{
		display: flex;
		justify-content: space-between;
	}

	@media only screen and (max-width: 768px) {
		.projectCard__img {
			height: 350px;
		}
	}
`;

function ProjectCard({
	img = projectImg,
	title = "Project name",
	description = "description",
	link,
	linkCode,
}) {
	return (
		<ProjectCardStyles>
			<a
				href={link}
				target="_blank"
				rel="noreferrer"
				className="projectCard__img"
			>
				<img src={img} alt="project img" />
			</a>
			<div className="projectCard__info">
				<a href={link} target="_blank" rel="noreferrer">
					<h3 className="projectCard__title">{title}</h3>
				</a>
				<p className="projectCard__description">{description}</p>
				<div className="links">
					{link && (
						<a
							className="projectButton"
							href={link}
							target="_blank"
							rel="noreferrer"
							id={link}
						>
							Live Project
						</a>
					)}
					{linkCode && (
						<a
							className="projectButton"
							href={linkCode}
							target="_blank"
							rel="noreferrer"
							id={linkCode}
						>
							Open Code
						</a>
					)}
				</div>
			</div>
		</ProjectCardStyles>
	);
}

export default ProjectCard;
