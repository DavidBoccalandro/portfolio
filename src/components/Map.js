import React from "react";
import styled from "styled-components";
import Description from "./Description";
import MapImg from "../assets/images/Map.JPG";

const MapStyles = styled.div`
	background: url(${MapImg}) left;
	min-height: 400px;
	.container {
		position: relative;
		min-height: 400px;
	}
	.map__card {
		position: absolute;
		text-align: center;
		left: -3%;
		top: 28%;
		padding: 1rem;
		background: var(--black);
		width: 100%;
		max-width: 300px;
		border-radius: 12px;
	}
	.map__card__heading {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
	.map__card__link {
		display: inline-block;
		font-size: 1.6rem;
		margin-top: 3rem;
		text-decoration: underline;
	}

	@media only screen and (max-width: 1200px) {
		background-position: 0% center;
		.map__card {
			top: 28%;
			left: 9%;
		}
	}
	@media only screen and (max-width: 768px) {
		background-position: 0% center;
		.map__card {
			top: 28%;
			left: 18%;
		}
	}
	@media only screen and (max-width: 568px) {
		background-position: 23.5% center;
		.map__card {
			top: 18%;
			left: 9%;
		}
		.map__card__heading {
			display: none;
		}
	}
`;

function Map() {
	return (
		<MapStyles>
			<div className="container">
				<div className="map__card">
					<h3 className="map__card__heading">Here is me</h3>
					<Description>Gral. Rodríguez, Buenos Aires, Argentina</Description>
					<a
						href="https://www.google.com/maps/place/Gral.+Rodr%C3%ADguez,+Provincia+de+Buenos+Aires/data=!4m2!3m1!1s0x95bc8e48e4cd75cb:0xaa5203098e3dc2c3?sa=X&ved=2ahUKEwj7puvg2ez2AhUAspUCHXnKCT4Q8gF6BAg2EAE"
						alt="map"
						target="_blank"
						rel="noreferrer"
						className="map__card__link"
					>
						Open in Google Map 🌍
					</a>
				</div>
			</div>
		</MapStyles>
	);
}

export default Map;
