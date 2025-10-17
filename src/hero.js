import React from "react";
import { motion } from "framer-motion";
import inventory from "./inventory.jpg"

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="pt-32 pb-16 text-center bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Simplify your <span className="text-blue-600">Bill of Materials</span> management.
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          BOMify helps you manage product structures, components, and revisions with ease.  
          Save time, reduce errors, and keep your team aligned.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#pricing"
            className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Get started free
          </a>
          <a href="#features" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <img
          src={inventory}
          alt="BOM Dashboard Preview"
          className="w-[80%] rounded-xl border border-gray-200 shadow-lg"
        />
      </div>
    </motion.section>
  );
};

export default Hero;

