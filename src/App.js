import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";
import LogoCloud from "./cloudlogo";
import Testimonials from "./testimonial";
import Pricing from "./pricing";
import FAQ from "./faq";
import Footer from "./footer";
import SignIn from "./signin";
import SignUp from "./signup";
import RootLayout from "./rootlayout";

function App() {
  return (
    <RootLayout>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LogoCloud />
                <Features />
                <Testimonials />
                <Pricing />
                <FAQ />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </RootLayout>
  );
}

export default App;


