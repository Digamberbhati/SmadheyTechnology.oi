import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Contact from "./pages/contactform/Contact";
import ScaleApp from "./pages/services/ScaleApp";
import SecureWeb from "./pages/services/SecureWeb";
import Angular from "./pages/services/Angular";
import ReactDev from "./pages/services/ReactDev";
import B2B from "./pages/services/B2B";

import AI from "./pages/services/AI";

import Firebase from "./pages/services/Firebase";

import Software from "./pages/services/Software";

import Java from "./pages/services/Java";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/scale-application" element={<ScaleApp />} />
          <Route path="/services/secure-websites" element={<SecureWeb />} />
          <Route path="/services/angular-development" element={<Angular />} />
          <Route path="/services/react-development" element={<ReactDev />} />
          <Route path="/services/b2b-collaboration" element={<B2B />} />
          <Route path="/services/ai-data-analysis" element={<AI />} />
          <Route path="/services/firebase-integration" element={<Firebase />} />
          <Route
            path="/services/software-architechure"
            element={<Software />}
          />
          <Route path="/services/java-development" element={<Java />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
