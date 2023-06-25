import React, { useEffect, useState } from "react";

function Navbar() {
	const [isTop, setIsTop] = useState(true);
	const [isBottom, setIsBottom] = useState(false);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const isScrolledToTop = scrollTop === 0;
		const isScrolledToBottom =
			scrollTop + window.innerHeight === document.documentElement.scrollHeight;

		setIsTop(isScrolledToTop);
		setIsBottom(isScrolledToBottom);
	};

	const handleSmoothScroll = (event, sectionId) => {
		event.preventDefault();
		const section = document.querySelector(sectionId);
		section.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed left-0 top-0 z-20 transform bg-gradient-to-b from-secondary to-secondary-500 shadow-2xl transition-all duration-300 w-screen ${
				isTop || isBottom ? "scale-110" : ""
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div
						className={`flex items-center transition-all duration-800 ${
							isTop || isBottom ? "scale-105" : ""
						}`}
					>
						<span className="text-lg font-bold text-primary">Logo</span>
					</div>
					<div className="flex">
						<a
							href="#landing"
							onClick={(event) => handleSmoothScroll(event, "#landing")}
							className="rounded-md px-3 py-2 text-sm font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary hover:backdrop-blur-2xl"
						>
							Home
						</a>
						<a
							href="#portfolio"
							onClick={(event) => handleSmoothScroll(event, "#portfolio")}
							className="rounded-md px-3 py-2 text-sm font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary-200"
						>
							Portfolio
						</a>
						<a
							href="#about"
							onClick={(event) => handleSmoothScroll(event, "#about")}
							className="rounded-md px-3 py-2 text-sm font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary-300"
						>
							About
						</a>
						<a
							href="#footer"
							onClick={(event) => handleSmoothScroll(event, "#footer")}
							className="rounded-md px-3 py-2 text-sm font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary-400"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;