import React from "react";
import MeImg from "../assets/images/photoPortfolio.jpg";
import Button from "./Button";
import Description from "./Description";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";

const HelloStyles = styled.div`
	padding: 5rem 0;
	.hello {
		min-height: 105vh;
		width: 100%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.hello__heading {
		font-size: 2rem;
		margin-bottom: -4rem;
		position: relative;
		span {
			display: inline-block;
			width: 100%;
		}
		.hello__name {
			font-size: 7rem;
			font-family: "Montserrat SemiBold";
			color: var(--white);
			text-shadow: 4px 4px 6px black;
		}
	}
	.hello__img {
		max-width: 900px;
		width: 100%;
		height: 600px;
		margin: 0 auto;
		border: 2px solid var(--gray-1);
	}
	.hello__info {
		margin-top: -14rem;
	}
	.hello__scrollDown {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: absolute;
		bottom: 20px;
		width: 50px;
		right: 50px;
		width: 50px;
		p {
			font-size: 1.6rem;
			transform: translateY(-70px) rotate(90deg);
			letter-spacing: 0.7rem;
			text-transform: uppercase;
		}
		img {
			max-height: 75px;
			width: 16px;
			margin: 0 auto;
			object-fit: contain;
		}
	}
	@media only screen and (max-width: 768px) {
		.hello {
			min-height: 750px;
		}
		.hello__heading {
			font-size: 1.4rem;
            margin-bottom: -3rem;
            .hello__iam {
                display: none;
            }
            .hello__name {
                font-size: 4.5rem;
            }
		}
        .hello__img {
            height: 450px;
        }
        .hello__info {
            margin-top: 3rem;
            padding: 1rem;
        }
        .hello__scrollDown {
            display: none;
        }
	}
`;

function Hello() {
	return (
		<HelloStyles>
			<div className="hello">
				<div className="container">
					<h1 className="hello__heading">
						<span className="hello__iam">Hello, I'm</span>
						<span className="hello__name">David Boccalandro</span>
					</h1>
					<div className="hello__img">
						<img src={MeImg} alt="" />
					</div>
					<div className="hello__info">
						<Description>
							Passionate about development. I love taking new challenges and
							learning new things daily.
						</Description>
						<Button btnLink="/projects" btnText="See my work" />
					</div>
					<div className="hello__scrollDown">
						<p>Scroll</p>
						<img src={ScrollDownArrow} alt="" />
					</div>
				</div>
			</div>
		</HelloStyles>
	);
}

export default Hello;
