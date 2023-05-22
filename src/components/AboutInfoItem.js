import React from "react";
import styled from "styled-components";
import Description from "./Description";

const AboutItemStyles = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
	margin-top: 3rem;
	.title {
		font-size: 2.4rem;
		margin-bottom: 1rem;
	}
	.items {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		left: 40rem;
	}
	.item {
		background-color: var(--black);
		padding: 1rem;
		border-radius: 8px;
	}
	@media only screen and (max-width: 990px) {
		.items {
			position: initial;
			gap: 1rem;
		}
		.title {
			font-size: 2rem;
		}
	}
`;

function AboutInfoItem({ title = "Title", items = ["item", "item2"] }) {
	return (
		<AboutItemStyles>
			<h1 className="title">{title}</h1>
			<div className="items">
				{items.map((item, index) => (
					<div className="item" key={index}>
						<Description>{item}</Description>
					</div>
				))}
			</div>
		</AboutItemStyles>
	);
}

export default AboutInfoItem;
