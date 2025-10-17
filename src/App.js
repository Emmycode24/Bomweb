import React from "react";
import './tailwindconfig.css'; 
import './index.css'
import Navbar from "./navbar.js";
import Hero from "./hero.js";
import LogoCloud from "./cloudlogo.js";
import Features from "./features.js"
import Testimonials from "./testimonial.js";
import Pricing from "./pricing.js";
import FAQ from "./faq.js";
import Footer from "./footer.js";

function App() {
  return (
    <div className="google-sans-code">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features/>
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    
    </div>
  );
}

export default App;

