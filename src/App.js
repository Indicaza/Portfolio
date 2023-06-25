// App.js
import React from "react";
import "./index.css";
import "./output.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Wizard from "./components/Wizard";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<LandingPage />
			<Wizard />
			<PortfolioSection />
			<AboutSection />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
