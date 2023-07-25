import React from "react";
import hacker from "../assets/hacker-found-solution.gif";
import oneRing from "../assets/oneRing.png";

function LandingPage() {
	return (
		<section
			id="home"
			className="pb-30 -py-96 z-0 h-screen w-screen bg-accent1"
		>
			<div className="flex h-full items-center justify-center">
				<div className="flex items-center justify-center">
					<img
						className="mx-auto w-1/2 rounded-full"
						src={hacker}
						alt="Hackerman"
					/>

					<img
						className="animate-spin-slow absolute mx-auto"
						src={oneRing}
						alt="One Ring to Rule Them All, One Ring to Find Them, One Ring to Bring Them All and in the Darkness Bind Them."
					/>

					<div className="absolute bottom-0 flex w-screen justify-center pb-20">
						<img
							alt="GitHub Stats"
							src="https://github-readme-streak-stats.herokuapp.com/?user=Indicaza&theme=darcula&hide_border=true"
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
            animation: spin 60s linear infinite;
          }
        `}
			</style>
		</section>
	);
}

export default LandingPage;
