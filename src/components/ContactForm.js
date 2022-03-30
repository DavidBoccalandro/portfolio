import React, { useState } from "react";
import styled from "styled-components";

const ContactFormStyles = styled.div`
	width: 100%;
	.form-group {
		width: 100%;
		margin-bottom: 2rem;
	}
	label {
		font-size: 1.8rem;
	}
	input,
	textarea {
		width: 100%;
		font-size: 2rem;
		padding: 1.2rem;
		color: var(--gray-1);
		background-color: var(--black);
		outline: none;
		border: none;
		border-radius: 8px;
		margin-top: 1rem;
	}
	textarea {
		min-height: 250px;
		resize: vertical;
	}
	button[type="submit"] {
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
		cursor: pointer;
	}
	button:hover {
		background-color: #000000;
		color: white;
		box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
			-0.125rem -0.125rem 10rem rgba(239, 71, 101, 0.5),
			0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
	}
	.button__center {
		display: flex;
		justify-content: center;
	}

	@media only screen and (max-width: 768px) {
		button[type="submit"] {
			width: 100%;
		}
	}
`;

function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<ContactFormStyles>
			<form name="contact" method="post" data-netlify="true">
				<input type="hidden" name="form-name" value="contact" />
				<div className="form-group">
					<label htmlFor="name">
						Your Name:
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="name">
						Your Email:
						<input
							type="text"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</label>
				</div>
				<div className="form-group">
					<label htmlFor="message">
						Your Message:
						<textarea
							type="text"
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</label>
				</div>
				<div className="button__center">
					<button type="submit">Send</button>
				</div>
			</form>
		</ContactFormStyles>
	);
}

export default ContactForm;
