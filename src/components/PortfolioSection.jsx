import React from "react";

function PortfolioSection() {
  return (
    <section id="portfolio" className="z-10 relative h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center rounded-md shadow-inner">

        <div className="flex items-center justify-center h-screen w-screen mt-0 pt-0">
          <img alt="GitHub Stats" src="https://github-readme-streak-stats.herokuapp.com/?user=Indicaza&theme=darcula&hide_border=true" className="w-1/2 h-1/2" />
        </div>
      </div>    
    </section>
  );
}

export default PortfolioSection;
