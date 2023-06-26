import React from "react";
import hacker from "../assets/hacker-found-solution.gif";
import oneRing from "../assets/oneRing.png";

function LandingPage() {
	return (
		<section
			id="landing"
			className="relative z-0 flex h-screen w-screen items-center justify-center bg-accent1 pb-60"
		>
			<div className="relative z-20">
				<div className="scale-250 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
					<img
						className="scale-85 rounded-full"
						src={hacker}
						alt="Hackerman"
					/>
					<img
						className="animate-spin-slow absolute left-0 top-0 mx-auto block"
						src={oneRing}
						alt="One Ring to Rule Them All, One Ring to Find Them, One Ring to Bring Them All and in the Darkness Bind Them."
					/>
				</div>
				<div className="flex h-screen items-center justify-center">
					<div className="text-center">
						<h1 className="items-bottom absolute text-secondary">
							Where am I?
						</h1>
						<p className="text-secondary">This text is not aligned properly!</p>
					</div>
				</div>
			</div>

			{/* Added Component */}
			{/* Updated Component */}
			<div className="scale-175 absolute bottom-0 z-20 flex w-full items-center justify-center pb-20">
				<div className="text-center">
					<img
						alt="GitHub Stats"
						src="https://github-readme-streak-stats.herokuapp.com/?user=Indicaza&theme=darcula&hide_border=true"
						className="mx-auto h-auto w-2/3"
					/>
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
