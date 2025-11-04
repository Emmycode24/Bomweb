import React from "react";
import logo1 from "./laravel.jpg";
import logo2 from "./tuple.jpg";
import logo3 from "./trans.jpg";
import logo4 from "./fintech.jpg";
import logo5 from "./electric.jpg";

export default function Hero() {
  const logos = [
    { name: "Laravel", logo: logo1 },
    { name: "Tuple", logo: logo2 },
    { name: "Transistor", logo: logo3 },
    { name: "Fintech", logo: logo4 },
    { name: "Electric", logo: logo5 },
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden" id="hero">
      {/* Decorative blue SVG wave background */}
      <svg
        className="absolute top-0 left-0 w-full h-64 text-blue-100"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          fillOpacity="1"
          d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,192C840,213,960,203,1080,197.3C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div className="relative z-10 container mx-auto px-6 py-24 text-center font-inter">
        {/* Headline */}
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          Bill of Materials{" "}
          <span className="relative text-blue-600">
            made simple
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-8 left-0 w-full fill-blue-200/50"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
          </span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-700">
          Streamline your manufacturing process with an intuitive, modern, and
          collaborative BOM management tool.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex enter gap-x-4 justify-center">
          <a
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium"
          >
            Get Started
          </a>
          <a
            href="/signin"
         className=" text-grey px-6 py-3 rounded-full  transition font-medium"
          >
            Sign In
          </a>
        </div>

        {/* Logo Cloud */}
        <div className="mt-24 lg:mt-32">
          <p className="text-base font-medium text-slate-900">
            Trusted by innovative teams worldwide
          </p>
          <ul className="mt-8 flex flex-wrap justify-center items-center gap-10 opacity-90">
            {logos.map((company, index) => (
              <li key={index} className="flex">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 w-auto grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}







