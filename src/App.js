// App.js
import React from "react";
import { useState } from "react";
// import "./index.css";
import "./output.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Wizard from "./components/Wizard";
import PortfolioSection from "./components/PortfolioSection";
// import Modal from "./components/Modal";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import dummy from "./dummyProjects.json";

function App() {
	// const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			<Navbar />
			<LandingPage />
			<Wizard />
			<PortfolioSection projects={dummy} />
			<AboutSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
