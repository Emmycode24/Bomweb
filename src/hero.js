import React from "react";
import { motion } from "framer-motion";
import heroImage from "./inventory.jpg";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="pt-32 pb-24 text-center bg-white font-weight-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight text-slate-900 ">
          Simplify your{" "}
          <span className="relative text-blue-600">
            Bill of Materials
            <svg
              viewBox="0 0 418 42"
              className="absolute left-0 top-2/3 h-[0.5em] w-full fill-blue-300/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
          </span>{" "}
          management.
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto font-normal">
          BOMify helps you manage assemblies, components, and versions
          effortlessly. Organize your product structures and streamline your
          engineering workflow with clarity.
        </p>

        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="/signup"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition"
          >
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <img
          src={heroImage}
          alt="BOM Dashboard Preview"
          className="w-[85%] max-w-5xl rounded-2xl border border-gray-200 shadow-lg"
        />
      </div>
    </motion.section>
  );
};

export default Hero;



