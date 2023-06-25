// components/ContactSection.js
import React from "react";

function LandingPage() {
	return (
		<section
			id="landing"
			className="absolute z-0 h-screen w-screen bg-green-900 opacity-25"
		>
			<div className="relative z-20">
				<div className="flex h-screen items-center justify-center">
					<div className="text-center">
						<h1 className="items-bottom absolute text-gray-100">
							Landing Page
						</h1>
						<p className="text-gray-400">
							This is the landing page content. Replace this with your own text.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LandingPage;
