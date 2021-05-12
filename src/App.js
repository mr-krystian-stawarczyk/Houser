import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataTwo, InfoDataThree } from "./data/InfoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<GlobalStyle />
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Hero slides={SliderData} />
			<InfoSection to="/about" {...InfoData} />
			<InfoSection to="/homes" {...InfoDataTwo} />
			<InfoSection to="/rentals" {...InfoDataThree} />
			<Footer />
		</>
	);
}

export default App;
