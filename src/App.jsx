import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import useLocoScroll from "./hooks/useLocoScroll";

const App = () => {
  useLocoScroll(true)
  return (
    <main data-scroll-container id="main-containter">
      <CustomCursor />
      <Navbar />
      <Hero />
      <section className="h-screen w-full bg-white"></section>
      <section className="h-screen w-full bg-white"></section>
    </main>
  );
};

export default App;
