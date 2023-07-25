import React, { useEffect, useState } from "react";
import { Link as ScrollLink, Events } from "react-scroll";
import { useMediaQuery } from "react-responsive";

import "./gradientBorder.css"; // import your CSS

function Navbar() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		Events.scrollEvent.register("begin", function (to) {
			setActiveSection(to);
		});

		return () => {
			Events.scrollEvent.remove("begin");
		};
	}, []);

	return (
		<nav
			id="navbar"
			className="text-md sticky top-0 z-50 w-screen bg-secondary py-6 font-eagle text-primary shadow-2xl"
		>
			<div className="mx-auto flex flex-row justify-between px-32">
				<h1 className="  flex items-center justify-center font-bold">
					Zach Reitmeier
				</h1>
				<button className="flex space-x-6">
					{["home", "portfolio", "about", "contact"].map((section) => (
						<ScrollLink
							key={section}
							to={section}
							spy={true}
							smooth={true}
							offset={-70}
							duration={800}
							className={`flex h-8 w-24 cursor-pointer items-center justify-center rounded-md font-bold hover:bg-primary-200 hover:text-secondary ${
								section === activeSection ? "gradient-border" : ""
							}`}
							onSetActive={setActiveSection}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</ScrollLink>
					))}
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
