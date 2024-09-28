import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useLenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Control scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smoothness
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time); // Update the scroll position
      requestAnimationFrame(raf); // Recursively request animation frame
    };

    requestAnimationFrame(raf); // Start the loop

    // Update ScrollTrigger on Lenis scroll event
    lenis.on("scroll", () => {
      ScrollTrigger.update(); // Only update ScrollTrigger here
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return lenis.scrollTo(value); // Lenis' scrollTo method handles scrolling
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", ScrollTrigger.update); // Refresh ScrollTrigger when necessary
    ScrollTrigger.refresh(); // Ensure ScrollTrigger updates its positions

    return () => {
      lenis.destroy(); // Cleanup Lenis on unmount
      ScrollTrigger.removeEventListener("refresh", ScrollTrigger.update);
    };
  }, []);
};

export default useLenisSmoothScroll;
