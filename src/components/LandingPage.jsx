// components/ContactSection.js
import React from "react";

function LandingPage() {
	return (
		<section
			id="landing"
			className="relative z-0 h-screen w-screen bg-accent1 flex justify-center items-center"
		>
			<div className="relative z-20">
				<div className="flex h-screen items-center justify-center">
					<div className="text-center">
						<h1 className="items-bottom absolute text-secondary">
							Landing Page
						</h1>
						<p className="text-secondary">
							This is the landing page content. Replace this with your own text.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LandingPage;
