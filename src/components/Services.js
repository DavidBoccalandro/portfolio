import React from "react";
import {
	DiNodejsSmall,
	DiPostgresql,
} from "react-icons/di";
import {
	SiReact,
	SiAngular,
	SiExpress,
	SiJavascript,
	SiRedux,
	SiSequelize,
	SiTypescript,
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

const ServicesItemStyles = styled.div`
	padding: 5rem 0;
	.services__allItems {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10rem;
		justify-content: space-between;
		margin-top: 5rem;
	}

	@media only screen and (max-width: 768px) {
		.services__allItems {
			grid-template-columns: repeat(3, 1fr);
			justify-content: center;
			max-width: 350px;
			margin: 00 auto;
			margin-top: 5rem;
			gap: 2rem;
		}
	}
`;

function Services() {
	return (
		<ServicesItemStyles>
			<div className="container">
				<SectionTitle heading="SKILLS" subheading="Technologies and tools" />
				<div className="services__allItems">
					<ServicesSectionItem
						icon={<SiJavascript />}
						description="JavaScript"
					/>
					<ServicesSectionItem
						icon={<SiTypescript />}
						description="TypeScript"
					/>
					<ServicesSectionItem icon={<SiAngular />} description="Angular" />
					<ServicesSectionItem icon={<SiReact />} description="React" />
					<ServicesSectionItem icon={<SiRedux />} description="Redux" />
					<ServicesSectionItem icon={<ImGit />} description="Git" />
					<ServicesSectionItem icon={<DiNodejsSmall />} description="Node.js" />
					<ServicesSectionItem icon={<SiExpress />} description="Express.js" />
					<ServicesSectionItem
						icon={<DiPostgresql />}
						description="PostgreSQL"
					/>
					<ServicesSectionItem icon={<SiSequelize />} description="Sequelize" />
				</div>
			</div>
		</ServicesItemStyles>
	);
}

export default Services;
