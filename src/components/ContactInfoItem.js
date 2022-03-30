import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import Description from "./Description";

const ContactInfoItemStyle = styled.a`
	padding: 1.84rem;
	background-color: var(--black);
	display: flex;
	align-items: center;
	gap: 2rem;
	border-radius: 8px;
	margin-bottom: 2rem;
	:hover {
		background-color: #000000;
		color: white;
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 10rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}
	cursor: pointer;
	.icon {
		color: var(--white);
		background-color: var(--gray-2);
		padding: 1.3rem;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}
	svg {
		width: 3.5rem;
	}
`;

function ContactInfoItem({
	icon = <MdPlace></MdPlace>,
	text = "This is an info",
	link,
}) {
	return (
		<ContactInfoItemStyle href={link} target="_blank" rel="noreferrer">
			<div className="icon">{icon}</div>
			<div className="info">
				<Description>{text}</Description>
			</div>
		</ContactInfoItemStyle>
	);
}

export default ContactInfoItem;
