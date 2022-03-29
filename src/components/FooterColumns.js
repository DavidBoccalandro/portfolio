import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterColumnsStyle = styled.div`
	.heading {
		font-size: 2.4rem;
		margin-bottom: 2rem;
	}
	li {
		margin-bottom: 1rem;
	}
	a {
		font-size: 1.8rem;
	}
`;

function FooterColumns({
	heading = "col heading",
	links = [
		{
			type: "link",
			title: "Home",
			path: "/home",
		},
		{
			type: "link",
			title: "About",
			path: "/about",
		},
	],
}) {
	return (
		<FooterColumnsStyle>
			<h1 className="heading">{heading}</h1>
			<ul>
				{links.map((link, index) => (
					<li key={index}>
						{link.type === "link" ? (
							<Link to={link.path}>{link.title}</Link>
						) : (
							<a href={link.path} target="_blank" rel="noreferrer">
								{link.title}
							</a>
						)}
					</li>
				))}
			</ul>
		</FooterColumnsStyle>
	);
}

export default FooterColumns;
