import React from "react";
import styled from "styled-components";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import ContactForm from "./ContactForm";

const ContactSectionStyle = styled.div`
	padding: 10rem 0;
	.contactSection__wrapper {
		display: flex;
		gap: 5rem;
		margin-top: 7rem;
		justify-content: space-between;
		position: relative;
	}
	.left {
		width: 100%;
		max-width: 500px;
		margin-top: 3.3rem;
	}
	.right {
		width: 100%;
		max-width: 500px;
	}

	@media only screen and (max-width: 768px) {
		.contactSection__wrapper {
			flex-direction: column;
		}
		.left,
		.right {
			max-width: 100%;
		}
		.right {
			padding: 4rem 2rem 2rem 2rem;
		}
	}
`;

function ContactSection() {
	return (
		<ContactSectionStyle>
			<div className="container">
				<SectionTitle heading="Contact" subheading="Get in touch" />
				<div className="contactSection__wrapper">
					<div className="left">
						<ContactInfoItem
							icon={<BiMailSend />}
							text="E-mail"
							link="mailto:davidboccalandro&commat;hotmail&period;com"
						/>
						<ContactInfoItem
							icon={<BsLinkedin />}
							text="LinkedIn"
							link="https://www.linkedin.com/in/david-boccalandro-developer/"
						/>
						<ContactInfoItem
							icon={<BsGithub />}
							text="GitHub"
							link="https://github.com/DavidBoccalandro"
						/>
						<ContactInfoItem
							icon={<BsWhatsapp />}
							text="WhatsApp"
							link="https://wa.me/+5491130775454"
						/>
					</div>
					<div className="right">
						<ContactForm />
					</div>
				</div>
			</div>
		</ContactSectionStyle>
	);
}

export default ContactSection;
