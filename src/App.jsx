import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import useLocoScroll from "./hooks/useLocoScroll";
import useLenisSmoothScroll from "./hooks/useLenisSmoothScroll";

const App = () => { 
  const [checkOs, setCheckOs] = useState(null);
  useEffect(()=>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      // true for mobile device
      setCheckOs('touch')
    }else{
      // false for not mobile device
      setCheckOs('desktop');
    } 
  },[]);
  // useLocoScroll(true)
  useLenisSmoothScroll();
  return (
    <main data-scroll-container id="main-containter">
      {checkOs === 'desktop' ? <CustomCursor /> : null}
      <Navbar />
      <Hero />
      <section className="h-screen w-full bg-white"></section>
      <section className="h-screen w-full bg-white"></section>
    </main>
  );
};

export default App;
