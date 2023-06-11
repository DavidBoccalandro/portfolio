import React from "react";
import styled from "styled-components";

const DescriptionStyle = styled.div`
	max-width: 700px;
	margin: 0 auto;
	font-size: 1.8rem;
	line-height: 1.3em;
    text-shadow: black 2px 2px;

	@media only screen and (max-width: 768px) {
		font-size: 1.4rem;
	}
`;

function Description({ children }) {
	return (
		<DescriptionStyle className="paragraph">
			<p>{children}</p>
		</DescriptionStyle>
	);
}

export default Description;
