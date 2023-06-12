import React from 'react';
import styled from 'styled-components';
import { FaCat } from 'react-icons/fa';
import Description from './Description';
import FooterColumns from './FooterColumns';

const FooterStyles = styled.div`
	background-color: var(--black);
	padding-top: 6rem;
	.container {
		display: flex;
		gap: 3rem;
	}
	.footer__col1 {
		flex: 2;
		.paragraph p svg {
			width: 30px;
		}
	}
	.footer__col2,
	.footer__col3,
	.footer__col4 {
		flex: 1;
	}
	.footer__col1__title {
		font-size: 3.5rem;
		margin-bottom: 1rem;
	}
	.copyright {
		background-color: var(--dark-bg);
		text-align: left;
		padding: 1rem 0;
		margin-top: 5rem;
		.para {
			margin-left: 0;
		}
		.container > .paragraph {
			max-width: none;
		}
	}

	@media only screen and (max-width: 768px) {
		.container {
			flex-direction: column;
			gap: 0rem;
			& > div {
				margin-top: 5rem;
			}
		}
		.footer__col1 .para {
			max-width: 100%;
		}
		.footer__col1 .paragraph p > svg {
			width: 20px;
		}
		.copyright {
			text-align: center;
			.container {
				div {
					margin-top: 0;
				}
			}
		}
	}
`;

function Footer() {
	return (
		<FooterStyles>
			<div className="container">
				<div className="footer__col1">
					<h1 className="footer__col1__title">David Boccalandro</h1>
					<Description>
						<FaCat></FaCat> Fun fact: My cat's name is Oreo because I'm a fan of "Oreo" cookies.
					</Description>
				</div>
				<div className="footer__col2">
					<FooterColumns
						heading="Important Links"
						links={[
							{ title: 'Home', path: '/', type: 'link' },
							{ title: 'About', path: '/about', type: 'link' },
							{ title: 'Projects', path: '/projects', type: 'link' },
							{ title: 'Contact', path: '/contact', type: 'link' },
						]}
					/>
				</div>
				<div className="footer__col3">
					<FooterColumns
						heading="Contact Info"
						links={[
							{
								title: 'Mail',
								path: 'mailto:davidboccalandro@hotmail.com',
							},
							{ title: 'WhatsApp', path: 'https://wa.me/+5491130775454' },
							{
								title: "Where i'm from",
								path: 'https://www.google.com/maps/place/Gral.+Rodr%C3%ADguez,+Provincia+de+Buenos+Aires/@-34.61806,-59.0154987,12z/data=!3m1!4b1!4m5!3m4!1s0x95bc8e48e4cd75cb:0xaa5203098e3dc2c3!8m2!3d-34.6083013!4d-58.9543265',
							},
						]}
					/>
				</div>
				<div className="footer__col4">
					<FooterColumns
						heading="Social Links"
						links={[
							{
								title: 'LinkedIn',
								path: 'https://www.linkedin.com/in/david-boccalandro-developer/',
							},
							{ title: 'GitHub', path: 'https://github.com/DavidBoccalandro' },
						]}
					/>
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<Description>© 2021 - Designed By David Boccalandro 🔥 FrontEnd - FullStack Developer</Description>
				</div>
			</div>
		</FooterStyles>
	);
}

export default Footer;
