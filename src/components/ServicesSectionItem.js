import React from 'react';
import Description from './Description';
import styled from 'styled-components';

const ItemStyles = styled.div`
	text-align: center;
	width: 120px;
	.servicesItem__icon {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		svg, img {
			width: 6rem;
		}
	}
	.servicesItem__title {
		font-size: 2.5rem;
		font-family: 'Montserrat SemiBold';
	}
	.paragraph {
		margin-top: 2rem;
	}

	@media only screen and (max-width: 768px) {
		.servicesItem__title {
			font-size: 1.5rem;
		}
		.paragraph {
			margin-top: 1rem;
		}
	}
`;

function ServicesSectionItem({ icon = <></>, description = 'Description' }) {
	return (
		<ItemStyles>
			<div className="servicesItem__icon">{icon}</div>
			<Description>{description}</Description>
		</ItemStyles>
	);
}

export default ServicesSectionItem;
