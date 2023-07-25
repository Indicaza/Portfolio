import React, { useEffect, useRef, useState } from "react";

import "./gradientBorder.css"; // import your CSS

function PortfolioSection({ projects }) {
	const cardsRef = useRef([]);
	const scrollContainerRef = useRef();
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const cardId = entry.target.getAttribute("data-id");
					if (entry.isIntersecting) {
						cardsRef.current[cardId].classList.add("scale-125");
						cardsRef.current[cardId].classList.add("z-20");
					} else {
						cardsRef.current[cardId].classList.remove("scale-125");
						cardsRef.current[cardId].classList.remove("z-20");
					}
				});
			},
			{ threshold: 0.75 }
		);

		cardsRef.current.forEach((card) => observer.observe(card));

		return () => {
			if (cardsRef.current) {
				cardsRef.current.forEach((card) => observer.unobserve(card));
			}
		};
	}, []);

	const handleResize = () => {
		setViewportWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const scrollLeft = () => {
		if (scrollContainerRef.current.scrollLeft > 0) {
			scrollContainerRef.current.scrollTo({
				left: scrollContainerRef.current.scrollLeft - viewportWidth,
				behavior: "smooth",
			});
		}
	};

	const scrollRight = () => {
		if (
			scrollContainerRef.current.scrollLeft <
			scrollContainerRef.current.scrollWidth -
				scrollContainerRef.current.offsetWidth
		) {
			scrollContainerRef.current.scrollTo({
				left: scrollContainerRef.current.scrollLeft + viewportWidth,
				behavior: "smooth",
			});
		}
	};

	return (
		<section
			id="portfolio"
			className="relative z-10 flex h-screen w-screen px-16"
		>
			{viewportWidth > 768 && (
				<button
					onClick={scrollLeft}
					className="gradient-border left-0 top-1/2 z-10 h-12 w-12 shadow-2xl"
				>
					Prev
				</button>
			)}
			<div
				ref={scrollContainerRef}
				className="flex snap-x snap-proximity space-x-44 overflow-x-auto overflow-y-hidden py-40"
			>
				<div
					className="pointer-events-none flex h-screen w-screen snap-center justify-center"
					style={{ minWidth: viewportWidth }}
				/>
				{projects.map((project, index) => (
					<div className="gradient-border mx-auto flex snap-center justify-center px-96">
						<div
							ref={(el) => (cardsRef.current[index] = el)}
							data-id={index}
							key={project.id}
							className="gradient-border h-fit w-96 rounded-lg bg-primary shadow-2xl ring-8 transition-transform duration-500"
						>
							<img
								src={project.img}
								alt={project.projectTitle}
								className="mx-auto mt-8 h-48 w-48 rounded-full shadow-lg"
							/>
							<div className="p-4">
								<h3 className="text-lg font-bold text-secondary-500">
									{project.projectTitle}
								</h3>
								<p className="text-sm text-secondary-300">
									{project.description}
								</p>
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:underline"
								>
									View Project
								</a>
							</div>
						</div>
					</div>
				))}
				<div
					className="pointer-events-none flex"
					style={{ minWidth: viewportWidth }}
				/>
			</div>
			{viewportWidth > 768 && (
				<button
					onClick={scrollRight}
					className="gradient-border right-0 top-1/2 z-20 h-12 w-12 shadow-2xl"
				>
					Next
				</button>
			)}
		</section>
	);
}

export default PortfolioSection;
