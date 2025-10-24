import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
    <Router>
      <RootLayout>
        <Navbar />
        <Routes>
          {/* Redirect any unknown route to home */}
          <Route path="*" element={<Navigate to="/" replace />} />

          {/* Main homepage */}
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

          {/* Auth pages */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
