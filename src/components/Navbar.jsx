import React, { useEffect, useState } from "react";

function Navbar() {
	const [isTop, setIsTop] = useState(true);
	const [isBottom, setIsBottom] = useState(false);
	const [activeSection, setActiveSection] = useState(null);

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
		const offsetTop = section.offsetTop;

		window.scrollTo({
			top: offsetTop,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleSectionEnter = (sectionId) => {
		setActiveSection(sectionId);
	};

	const handleSectionLeave = () => {
		setActiveSection(null);
	};

	const isSectionActive = (sectionId) => {
		return activeSection === sectionId;
	};

	return (
		<nav
			className={`fixed left-0 top-0 z-20 w-screen transform bg-secondary shadow-2xl transition-all duration-300 ${
				isTop || isBottom ? "scale-110" : ""
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div
						className={`duration-800 flex items-center transition-all ${
							isTop || isBottom ? "scale-120" : ""
						}`}
					>
						<span className="text-lg font-bold text-primary">Logo</span>
					</div>
					<div className="flex">
						<a
							href="#landing"
							onClick={(event) => handleSmoothScroll(event, "#landing")}
							className={`${
								isSectionActive("landing") ? "gradient-border" : ""
							} text-sm rounded-md px-3 py-2 font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary-400`}
							onMouseEnter={() => handleSectionEnter("landing")}
							onMouseLeave={handleSectionLeave}
						>
							Home
						</a>
						<a
							href="#portfolio"
							onClick={(event) => handleSmoothScroll(event, "#portfolio")}
							className={`${
								isSectionActive("portfolio") ? "gradient-border" : ""
							} text-sm rounded-md px-3 py-2 font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary-400`}
							onMouseEnter={() => handleSectionEnter("portfolio")}
							onMouseLeave={handleSectionLeave}
						>
							Portfolio
						</a>
						<a
							href="#about"
							onClick={(event) => handleSmoothScroll(event, "#about")}
							className={`${
								isSectionActive("about") ? "gradient-border" : ""
							} text-sm rounded-md px-3 py-2 font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary-400`}
							onMouseEnter={() => handleSectionEnter("about")}
							onMouseLeave={handleSectionLeave}
						>
							About
						</a>
						<a
							href="#footer"
							onClick={(event) => handleSmoothScroll(event, "#footer")}
							className={`${
								isSectionActive("footer") ? "gradient-border" : ""
							} text-sm rounded-md px-3 py-2 font-medium text-primary drop-shadow-2xl transition duration-300 ease-in-out hover:bg-accent1 hover:text-secondary-400`}
							onMouseEnter={() => handleSectionEnter("footer")}
							onMouseLeave={handleSectionLeave}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
			<style>
				{`
          .gradient-border {
            --borderWidth: 3px;
            background: #1D1F20;
            position: relative;
            border-radius: var(--borderWidth);
          }

          .gradient-border:after {
            content: '';
            position: absolute;
            top: calc(-1 * var(--borderWidth));
            left: calc(-1 * var(--borderWidth));
            height: calc(100% + var(--borderWidth) * 2);
            width: calc(100% + var(--borderWidth) * 2);
            background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            border-radius: calc(2 * var(--borderWidth));
            z-index: -1;
            animation: animatedgradient 3s ease alternate infinite;
            background-size: 300% 300%;
          }

          @keyframes animatedgradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
			</style>
		</nav>
	);
}

export default Navbar;
