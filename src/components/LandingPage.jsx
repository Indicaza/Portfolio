import React from "react";
import hacker from "../assets/hacker-found-solution.gif";
import oneRing from "../assets/oneRing.png";

function LandingPage() {
	return (
		<section
			id="landing"
			className="z-0 flex h-screen w-screen items-center justify-center bg-accent1 pb-60"
		>
			<div className="flex h-1/2 w-1/2 items-center justify-center bg-red-700">
				<div className="relative">
					<img
						className=" rounded-full"
						src={hacker}
						alt="Hackerman"
					/>
					<img
						className="animate-spin-slow absolute left-0 top-0 mx-auto block"
						src={oneRing}
						alt="One Ring to Rule Them All, One Ring to Find Them, One Ring to Bring Them All and in the Darkness Bind Them."
					/>
				</div>
			</div>

			{/* Added Component */}
			{/* Updated Component */}
			<div className="absolute bottom-0 z-50 flex w-full items-center justify-center pb-20">
				<div className="text-center">
					<img
						alt="GitHub Stats"
						src="https://github-readme-streak-stats.herokuapp.com/?user=Indicaza&theme=darcula&hide_border=true"
						className="mx-auto"
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
