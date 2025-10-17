import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">
            B
          </div>
          <span className="font-semibold text-white text-lg">BOMify</span>
        </div>

        <div className="space-x-6 text-sm">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#hero" className="hover:text-white">Top</a>
        </div>

        <p className="mt-6 md:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} BOMify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

