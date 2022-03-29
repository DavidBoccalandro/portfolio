import React from "react";
import { Link } from "react-router-dom";
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

	@media only screen and (max-width: 768px) {
        .projectCard__img {
            height: 350px;
        }
	}
`;

function ProjectCard({
	img= projectImg,
	title = "Project name",
	description = "description",
}) {
	return (
		<ProjectCardStyles>
			<Link to="/projects" className="projectCard__img">
				<img src={img} alt="project img" />
			</Link>
			<div className="projectCard__info">
				<Link to="#">
					<h3 className="projectCard__title">{title}</h3>
				</Link>
				<p className="projectCard__description">{description}</p>
			</div>
		</ProjectCardStyles>
	);
}

export default ProjectCard;
