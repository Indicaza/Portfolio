import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="z-20 relative bg-secondary text-primary py-6 w-screen">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Footer</h2>
          <p className="text-primary">
            This is the footer content. Replace this with your own text.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/zach-reitmeier-b52922162/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Indicaza"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/ReitmeierZach"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-xl"
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
