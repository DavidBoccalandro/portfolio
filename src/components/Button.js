import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
	margin-top: 2rem;
	.button {
		background: linear-gradient(rgba(0, 0, 0, 0.486), rgba(59, 16, 54, 0.75));
		box-shadow: rgb(17, 10, 9);
		font-size: 2.2rem;
		background-color: ${(props) =>
			props.outline ? "transparent" : "var(--pink)"};
		padding: 0.7em 2em;
		border-radius: 8px;
		display: inline-block;
		border: 2px solid var(--gray-1);
		color: ${(props) => (props.outline ? "var(--gray-1)" : "white")};
	}
	.button:hover {
		background-color: #000000;
		color: white;
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 10rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}

	@media only screen and (max-width: 768px) {
		.button {
			font-size: 1.8rem;
		}
	}
`;

function Button({ btnLink = "test", btnText = "Test", outline = false }) {
	return (
		<ButtonStyle outline={outline} className="button-wrapper">
			<Link className="button" to={btnLink}>
				{btnText}
			</Link>
		</ButtonStyle>
	);
}

export default Button;
