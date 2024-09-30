import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChildrenWrapper from "./components/ChildrenWrapper";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [checkOs, setCheckOs] = useState(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

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


  useEffect(() => {
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // Start when the top of the element hits the center of the viewport
        toggleActions: "play none none reverse",
        scrub: 2,
      },
      filter: "blur(5px)",
    });
    gsap.to(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top center+=10%", // Start when the top of the element hits the center of the viewport
        end: "bottom center", // End when the bottom of the element hits the top of the viewport
        toggleActions: "play none none reverse",
        scrub: 1,
      },
      scale: 1,
      height: "max-content",
      width: "100vw",
      borderRadius: 0,
      translateZ: 0,
      transformPerspective: 1000, // Adds depth perspective
    });
  }, []);
  return (
    <>
      <Navbar />

      {checkOs === "desktop" ? <CustomCursor /> : null}
      <main
        data-scroll-container
        id="main-containter"
        className="main-container relative"
        style={{ perspective: "1000px" }}
      >
        <Hero ref={heroRef} />
        <ChildrenWrapper ref={contentRef} />
      </main>
    </>
  );
};

export default App;
