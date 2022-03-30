import React from "react";
import styled from "styled-components";
import Description from "./Description";

const AboutItemStyles = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: relative;
	margin-top: 3rem;
	.title {
		font-size: 2.4rem;
	}
	.items {
		display: flex;
		gap: 1.5rem;
		position: absolute;
		left: 40rem;
	}
	.item {
		background-color: var(--black);
		padding: 1rem;
		border-radius: 8px;
	}
	@media only screen and (max-width: 990px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;
		.items {
			position: initial;
			gap: 1rem;
		}
		.title {
			font-size: 2rem;
		}
	}
	@media only screen and (max-width: 550px) {
		.items {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media only screen and (max-width: 470px) {
		.items {
			grid-template-columns: repeat(2, 1fr);
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
