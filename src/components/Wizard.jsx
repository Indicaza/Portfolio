import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import customLoading from "../assets/planet.gif";

function Wizard() {
	const [isWizardLoaded, setIsWizardLoaded] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleButtonClick = () => {
		setIsLoading(true);

		// Simulating loading delay
		setTimeout(() => {
			setIsLoading(false);
			setIsWizardLoaded(true);
		}, 2000);
	};

	return (
		<section
			id="wizard"
			className="sticky left-0 top-0 z-10 h-screen w-screen bg-secondary-500"
		>
			{!isWizardLoaded ? (
				<div className="relative flex h-full w-full items-center justify-center">
					<button
						onClick={handleButtonClick}
						className="btn-accent btn-outline btn"
					>
						Load Wizard
					</button>
					{isLoading && (
						<img
							src={customLoading}
							alt="Custom Loading"
							style={{
								position: "absolute",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								zIndex: 10,
							}}
						/>
					)}
				</div>
			) : (
				<div className="justify-left items-left relative flex h-full w-full">
					<Spline
						scene="https://prod.spline.design/6GevGfuhnyPg6iRT/scene.splinecode"
						onLoaded={() => {}}
					/>
				</div>
			)}
		</section>
	);
}

export default Wizard;
