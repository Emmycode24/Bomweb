import React from "react";
import "./index.css"; // your Tailwind CSS file


const RootLayout = ({ children }) => {
  return (
    <div className="h-full scroll-smooth bg-white antialiased font-inter">
      {children}
    </div>
  );
};

export default RootLayout;
