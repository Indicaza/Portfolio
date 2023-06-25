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
			className={`sticky left-0 top-0 z-20 w-full transform bg-primary transition-all duration-300 ${
				isTop || isBottom ? "scale-110" : ""
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div
						className={`flex items-center transition-all duration-300 ${
							isTop || isBottom ? "scale-105" : ""
						}`}
					>
						<span className="text-lg font-bold text-accent1">Logo</span>
					</div>
					<div className="flex">
						<a
							href="#landing"
							onClick={(event) => handleSmoothScroll(event, "#landing")}
							className="rounded-md px-3 py-2 text-sm font-medium text-accent2 transition duration-300 ease-in-out hover:bg-accent3 hover:text-white"
						>
							Home
						</a>
						<a
							href="#portfolio"
							onClick={(event) => handleSmoothScroll(event, "#portfolio")}
							className="rounded-md px-3 py-2 text-sm font-medium text-accent2 transition duration-300 ease-in-out hover:bg-accent3 hover:text-white"
						>
							Portfolio
						</a>
						<a
							href="#about"
							onClick={(event) => handleSmoothScroll(event, "#about")}
							className="rounded-md px-3 py-2 text-sm font-medium text-accent2 transition duration-300 ease-in-out hover:bg-accent3 hover:text-white"
						>
							About
						</a>
						<a
							href="#footer"
							onClick={(event) => handleSmoothScroll(event, "#footer")}
							className="rounded-md px-3 py-2 text-sm font-medium text-accent2 transition duration-300 ease-in-out hover:bg-accent3 hover:text-white"
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
