import React from 'react';
import { DiNodejsSmall, DiPostgresql, DiSass } from 'react-icons/di';
import {
	SiReact,
	SiAngular,
	SiExpress,
	SiJavascript,
	SiRedux,
	SiSequelize,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiReactivex,
	SiBootstrap,
	SiJest,
	SiTestinglibrary,
	SiJasmine,
} from 'react-icons/si';
import { ImGit } from 'react-icons/im';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';
import ngRxSvg from '../assets/images/ngrx.svg';
import angularMaterial from '../assets/images/angularMaterial.svg';

const ServicesItemStyles = styled.div`
	padding: 5rem 0;
	.services__allItems {
		display: flex;
		flex-wrap: wrap;
		gap: 5rem;
		justify-content: center;
		margin-top: 5rem;
	}

	@media only screen and (max-width: 768px) {
		.services__allItems {
			margin: 00 auto;
			margin-top: 5rem;
			gap: 3rem 2rem;
		}
	}
`;

function Services() {
	return (
		<ServicesItemStyles>
			<div className="container">
				<SectionTitle heading="SKILLS" subheading="Technologies and tools" />
				<div className="services__allItems">
					<ServicesSectionItem icon={<SiAngular />} description="Angular" />
					<ServicesSectionItem icon={<SiReact />} description="React" />
					<ServicesSectionItem icon={<SiJavascript />} description="JavaScript" />
					<ServicesSectionItem icon={<SiTypescript />} description="TypeScript" />
					<ServicesSectionItem icon={<SiRedux />} description="Redux" />
					<ServicesSectionItem icon={<img src={ngRxSvg} alt="ngRx icon" />} description="NgRx" />
					<ServicesSectionItem icon={<SiReactivex />} description="RxJS" />
					<ServicesSectionItem icon={<SiHtml5 />} description="HTML" />
					<ServicesSectionItem icon={<SiCss3 />} description="CSS" />
					<ServicesSectionItem icon={<DiSass />} description="Sass" />
					<ServicesSectionItem icon={<img src={angularMaterial} alt="Angular Material icon" />} description="Angular Material" />
					<ServicesSectionItem icon={<SiBootstrap />} description="Bootstrap" />
					<ServicesSectionItem icon={<SiJest />} description="Jest" />
					<ServicesSectionItem icon={<SiTestinglibrary />} description="React Testing Library" />
					<ServicesSectionItem icon={<SiJasmine />} description="Jasmine" />
					<ServicesSectionItem icon={<ImGit />} description="Git" />
					<ServicesSectionItem icon={<DiNodejsSmall />} description="Node.js" />
					<ServicesSectionItem icon={<SiExpress />} description="Express.js" />
					<ServicesSectionItem icon={<DiPostgresql />} description="PostgreSQL" />
					<ServicesSectionItem icon={<SiSequelize />} description="Sequelize" />
				</div>
			</div>
		</ServicesItemStyles>
	);
}

export default Services;
