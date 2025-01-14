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
import Journey from "./components/Journey";
import BackgroundScene from "./components/ui/BackgroundScene";
const App = () => {
  const [checkOs, setCheckOs] = useState(null);
  const heroRef = useRef(null);
  const entryRef = useRef();
  const handleScroll = (e)=>{
    console.log(e, ' :: scroller')
  }
  useEffect(() => {
    if(entryRef.current){
      window.addEventListener('scroll', handleScroll);
    }
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
      <section className="w-full z-[0] fixed inset-0" style={{height: '100dvh'}}>
      <BackgroundScene />
      </section>
      <main
        ref={entryRef}
        id="main-container"
        className="main-container"
        // onMouseMove={handleMouseMove}
      >
        <Hero ref={heroRef} />
        <Journey />
        <Skills />
        <Project />
        <Footer />
      </main>
    </>
  );
};

export default App;
