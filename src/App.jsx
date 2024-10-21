import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ChildrenWrapper from "./components/ChildrenWrapper";
import ComponentsWrapper from "./components/ComponentsWrapper";
gsap.registerPlugin(ScrollTrigger);
import useLenisSmoothScroll from "./hooks/useLenisSmoothScroll";
const App = () => {
  useLenisSmoothScroll();
  const [checkOs, setCheckOs] = useState(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const componentRef = useRef(null);

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

  // GSAP and scroll trigger in useLayoutEffect
  useLayoutEffect(() => {
    // GSAP scroll trigger
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top", // Start when the top of the element hits the center of the viewport
        toggleActions: "play none none reverse",
        scrub: 2,
      },
      filter: "blur(5px)",
    });

    // Handle window resize
    const handleResize = () => {
      clearTimeout(window.resizedFinished);
      window.resizedFinished = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 250); // 250ms debounce
    };

    window.addEventListener("resize", handleResize);


    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
        {/* <ChildrenWrapper ref={contentRef} /> */}
        <ComponentsWrapper
          ref={componentRef}
          marginTop={heroRef?.current?.clientHeight}
        />
      </main>
    </>
  );
};

export default App;
