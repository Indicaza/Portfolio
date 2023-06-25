import React from "react";
import hacker from "../assets/hacker-found-solution.gif";
import oneRing from "../assets/oneRing.png";

function LandingPage() {
	return (
		<section
			id="landing"
			className="relative z-0 flex h-screen w-screen items-center justify-center bg-accent1"
		>
			<div className="relative z-20">
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-160 transform">
					<img
						className="rounded-full"
						src={hacker}
						alt="Hackerman"
					/>
					<img
						src={oneRing}
						alt="One Ring to Rule Them All, One Ring to Find Them, One Ring to Bring Them All and in the Darkness Bind Them."
						className="animate-spin-slow absolute left-0 top-0 mx-auto block scale-75"
					/>
				</div>
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
			<style>
				{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .animate-spin-slow {
            animation: spin 45s linear infinite;
          }
        `}
			</style>
		</section>
	);
}

export default LandingPage;
