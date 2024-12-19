import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Skills from "./components/Skills";
import Project from "./components/ui/Project";
import Footer from "./components/ui/Footer";
import About from "./components/About";
const App = () => {
  const [checkOs, setCheckOs] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setCheckOs("touch");
    } else {
      setCheckOs("desktop");
    }
  }, []);

  useLayoutEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setCheckOs("touch");
    } else {
      setCheckOs("desktop");
    }
  }, []);


  return (
    <>
      <Navbar />

      {checkOs === "desktop" ? <CustomCursor /> : null}
      <main
        data-scroll-container
        id="main-container"
        className="main-container relative"
        style={{ perspective: "1000px" }}
      >
        <Hero ref={heroRef} />
        <About />

        {/* <Journey /> */}
        <Skills />
        <Project />
        <Footer />
      </main>
    </>
  );
};

export default App;
