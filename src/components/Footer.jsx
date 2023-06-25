import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer
			id="footer"
			className="relative z-20 w-screen bg-gradient-to-b from-secondary-500 to-secondary-200 px-4 py-6 text-primary sm:px-6"
		>
			<div className="container mx-auto flex w-1/2 items-center justify-between">
				<div
					id="githubChart"
					className="flex-shrink-0"
				>
					<img
						src="http://ghchart.rshah.org/2D2D2D/Indicaza"
						alt="Indicaza's Github chart"
					/>
				</div>
				<div
					id="footerInfo"
					className="ml-6 w-1/2 text-center"
				>
					<h2 className="mb-2 text-2xl font-bold"></h2>
					<p className="text-primary">
						This is the footer content. Replace this with your own text.
					</p>
					<div className="mt-4 flex justify-center space-x-4">
						<a
							href="https://www.linkedin.com/in/zach-reitmeier-b52922162/"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-icon text-4xl transition-all duration-300 ease-in-out hover:text-5xl hover:text-accent1"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://github.com/Indicaza"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-icon text-4xl transition-all duration-300 ease-in-out hover:text-5xl hover:text-accent1"
						>
							<FaGithub />
						</a>
						<a
							href="https://twitter.com/ReitmeierZach"
							target="_blank"
							rel="noopener noreferrer"
							className="footer-icon text-4xl transition-all duration-300 ease-in-out hover:text-5xl hover:text-accent1"
						>
							<FaTwitter />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
