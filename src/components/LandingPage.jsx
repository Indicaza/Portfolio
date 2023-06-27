import React from "react";
import hacker from "../assets/hacker-found-solution.gif";
import oneRing from "../assets/oneRing.png";

function LandingPage() {
	return (
		<section
			id="landing"
			className="pb-30 z-0 h-screen w-screen bg-accent1"
		>
			<div className="flex h-full items-center justify-center">
				<div className="flex h-1/2 w-1/2 items-center justify-center">
					<div className="">
						<img
							className="mx-auto w-1/2 rounded-full"
							src={hacker}
							alt="Hackerman"
						/>
					</div>
					<div className="absolute">
						<img
							className="animate-spin-slow mx-auto w-1/2"
							src={oneRing}
							alt="One Ring to Rule Them All, One Ring to Find Them, One Ring to Bring Them All and in the Darkness Bind Them."
						/>
					</div>
				</div>

				<div className="absolute mt-60 flex w-full justify-center pt-60">
					<div className="">
						<img
							alt="GitHub Stats"
							src="https://github-readme-streak-stats.herokuapp.com/?user=Indicaza&theme=darcula&hide_border=true"
							className=""
						/>
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
