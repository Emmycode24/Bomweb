import React from "react";
import fintech from "./fintech.jpg"
import electric from "./electric.jpg"
import laravel from "./laravel.jpg"
import trans from "./trans.jpg"
import tuple from "./tuple.jpg"
const logos = [fintech,electric,laravel,trans,tuple];
 


const LogoCloud = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold text-gray-600">
          Trusted by 5,000+ businesses worldwide
        </h2>
        <div className="mt-10 flex justify-center flex-wrap items-center gap-x-12 gap-y-8">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Company logo" className="h-30 w-auto opacity-70" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
