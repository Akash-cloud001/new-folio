import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";

const App = () => {
  

  return (
    <main id="main-containter relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <section className="h-screen w-full bg-white"></section>
      <section className="h-screen w-full bg-white"></section>
    </main>
  );
};

export default App;
