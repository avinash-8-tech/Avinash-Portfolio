import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Lenis from "lenis";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Links from "./pages/Links";

const AnimatedRoutes = () => {
  const location = useLocation();
  const routesRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(routesRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.5, ease: "power2.inOut" }
    );
  }, [location]);

  return (
    <div ref={routesRef} style={{ opacity: 0 }}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}

      <div className={`${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </div>
    </>
  );
};

export default App;