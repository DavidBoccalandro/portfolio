import React from "react";
import Description from "./Description";
import styled from "styled-components";

const ItemStyles = styled.div`
	text-align: center;
	.servicesItem__icon {
		svg {
			width: 6rem;
		}
	}
	.servicesItem__title {
		font-size: 2.5rem;
		font-family: "Montserrat SemiBold";
	}
	.paragraph {
		margin-top: 2rem;
	}
`;

function ServicesSectionItem({ icon = <></>, description = "Description" }) {
	return (
		<ItemStyles>
			<div className="servicesItem__icon">{icon}</div>
			<Description>{description}</Description>
		</ItemStyles>
	);
}

export default ServicesSectionItem;
