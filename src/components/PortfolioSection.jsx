import React from "react";
import { useState } from "react";

function PortfolioSection({ projects }) {
	const [focusID, setFocusID] = useState(0);

	return (
		<section
			id="portfolio"
			className="relative z-10 flex items-center overflow-x-auto bg-accent3"
			style={{ scrollSnapType: "x proximity" }}
		>
			<div className="flex h-screen w-screen space-x-96  pt-80">
				{projects.map((project) => (
					<div
						key={project.id}
						className="mx-auto h-5/6 w-2/3 flex-none rounded-lg bg-primary shadow-2xl outline outline-secondary-500 ring-4"
						style={{ scrollSnapAlign: "center" }}
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
				))}
			</div>
		</section>
	);
}

export default PortfolioSection;
