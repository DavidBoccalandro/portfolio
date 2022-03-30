import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import projects from "../assets/data/projects";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

const ProjectsStyle = styled.div`
	padding: 10rem 0;
	.projects__allItems {
		display: flex;
		gap: 3rem;
		margin-top: -3rem;
	}
	.swiper-container {
		padding-top: 8rem;
		max-width: 100%;
	}
	.swiper-button-prev,
	.swiper-button-next {
		/* display none temporal hasta tener más proyectos */
		display: none;
		position: absolute;
		height: 50px;
		width: 50px;
		background: var(--black);
		z-index: 10;
		right: 60px;
		left: auto;
		top: 0;
		transform: translateY(50%);
		color: var(--gray-1);
		border-radius: 8px;
	}
	.swiper-button-next {
		right: 0;
	}
	.swiper-button-prev::after,
	.swiper-button-next::after {
		font-size: 2rem;
	}

	@media only screen and (max-width: 768px) {
		.projects__allItems {
			flex-direction: column;
			max-width: 400px;
			margin: 0 auto;
			margin-top: 7rem;
			gap: 5rem;
			.projectCard_img {
				width: 100%;
			}
		}
		/* display flex temporal hasta tener más proyectos */
		.swiper-button-prev,
		.swiper-button-next {
			display: flex;
		}
	}

	/* media query, y display flex temporal hasta tener más proyectos */
	@media only screen and (max-width: 1200px) {
		.swiper-button-prev,
		.swiper-button-next {
			display: flex;
		}
	}
`;

function Projects() {
	return (
		<ProjectsStyle>
			<div className="container">
				<SectionTitle heading="PROJECTS" subheading="Some of my recent works" />
				<div className="projects__allItems">
					<Swiper
						spaceBetween={30}
						slidesPerView={1}
						navigation
						breakpoints={{
							640: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1200: {
								slidesPerView: 3,
							},
						}}
					>
						{projects.map((project) => {
							return (
								<SwiperSlide key={project.id}>
									<ProjectCard
										title={project.name}
										img={project.img}
										description={project.description}
										link={project.link}
										linkCode={project.linkCode}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</ProjectsStyle>
	);
}

export default Projects;
