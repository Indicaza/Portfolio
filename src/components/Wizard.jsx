import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { TailSpin } from "react-loader-spinner";

function Wizard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay of 2 seconds before setting isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="wizard" className="z-10 bg-secondary-200 sticky left-0 top-0 w-screen h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <TailSpin color="#FFFFFF" height={115} width={115} />
          <h2 className="z-20 absolute text-gray-100 items-bottom">Pardon Our Dust</h2>
        </div>
      ) : (
        /* Spline component */
        <div className="flex justify-left items-left w-full h-full ">
        <Spline scene="https://prod.spline.design/6GevGfuhnyPg6iRT/scene.splinecode" />
        </div>
      )}
    </section>
  );
}

export default Wizard;
