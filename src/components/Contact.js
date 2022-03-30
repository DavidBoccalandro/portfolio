import React from "react";
import Description from "./Description";
import Button from "./Button";
import styled from "styled-components";

const ContactStyles = styled.div`
	padding: 10rem 0;
	.contact__wrapper {
		background-color: var(--black);
		border-radius: 12px;
		padding: 5rem 0rem;
		text-align: center;
	}
	.contact__heading {
		font-size: 4rem;
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 768px) {
		.contact__heading {
			font-size: 2.8rem;
		}
	}
`;

function Contact() {
	return (
		<ContactStyles>
			<div className="container">
				<div className="contact__wrapper">
					<Description>If you are interested in my profile</Description>
					<h3 className="contact__heading">Let me know!</h3>
					<Button btnText="Contact Me" btnLink="/contact"></Button>
				</div>
			</div>
		</ContactStyles>
	);
}

export default Contact;
