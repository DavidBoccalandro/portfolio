import { v4 as uuidv4 } from "uuid";
import PiFood from "../images/PiFood.JPG";
import JSeekers from "../images/JSeekers.JPG";
import PortfolioPhoto from "../images/PortfolioPhoto.JPG";

const projects = [
	{
		id: uuidv4(),
		name: "FoodApp",
		description:
			"An application to search, filter, sort and create recipes. I developed the SPA with PERN stack.",
		img: PiFood,
		link: "https://food-app-fawn.vercel.app/",
		linkCode: "https://github.com/DavidBoccalandro/foodApi",
	},
	{
		id: uuidv4(),
		name: "JSeekers",
		description:
			"A progressive web app to help developers to get job. Was developed as a team",
		img: JSeekers,
		link: "https://pf-seekerpro.herokuapp.com/",
		linkCode: "https://github.com/DavidBoccalandro/SeekerPRO",
	},
	{
		id: uuidv4(),
		name: "My Portfolio",
		description:
			"My first project after graduating. Using this app you can check my skills. I developed with React.",
		img: PortfolioPhoto,
	},
];

export default projects;
