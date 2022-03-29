import React from "react";
import About from "../components/About";
import Hello from "../components/Hello";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
	return (
		<div>
			<Hello />
			<About />
			<Services />
			<Projects/>
			<Contact/>
		</div>
	);
}

export default Home;
