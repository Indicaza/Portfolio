import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { TailSpin } from "react-loader-spinner";
import customLoading from "../assets/planet.gif"; // Step 1: Import the custom GIF

function Wizard() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulating a delay of 2 seconds before setting isLoading to false
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		// Clean up the timer when the component unmounts
		return () => clearTimeout(timer);
	}, []);

	return (
		<section
			id="wizard"
			className="sticky left-0 top-0 z-10 h-screen w-screen bg-secondary-200"
		>
			{isLoading ? (
				<div className="flex h-full w-full items-center justify-center">
					{/* Step 2: Use custom GIF for loading icon */}
					<img
						src={customLoading}
						alt="Custom Loading Icon"
						height={315}
						width={315}
					/>
					<h2 className="items-bottom absolute z-20 pt-60 text-primary">
						Pardon Our Dust
					</h2>
				</div>
			) : (
				/* Spline component */
				<div className="justify-left items-left flex h-full w-full">
					<Spline scene="https://prod.spline.design/6GevGfuhnyPg6iRT/scene.splinecode" />
				</div>
			)}
		</section>
	);
}

export default Wizard;
