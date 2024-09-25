import React, { useEffect, useRef, useState } from "react";
import MenuBarIcon from "../svgComponents/MenuBarIcon";
import gsap from "gsap";
const Marquee = () => {
  const marqueRef = useRef(null);

  useEffect(() => {
    const marqueeContainer = marqueRef.current;

    if (!marqueeContainer) return;

    const duration = marqueeContainer.getAttribute("duration") || 40;

    const marqueeContent = marqueeContainer.querySelector(".marquee-content");
    if (!marqueeContent) return;
    const width = parseInt(
      getComputedStyle(marqueeContent).getPropertyValue("width"),
      10
    );

    let totalItemsToCover = marqueeContainer.clientWidth / width;
    if (marqueeContainer.children.length <= 3) {
      const clone = marqueeContent.cloneNode(true);
      marqueeContainer.prepend(clone);
    }

    let tween;

    const playMarquee = () => {
      let currProg = tween ? tween.progress() : 0;
      tween && tween.progress(0).kill();

      const width = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("width"),
        10
      );
      const gap = parseInt(
        getComputedStyle(marqueeContent).getPropertyValue("column-gap"),
        10
      );
      const distanceToTranslate = -1 * (gap + width);

      tween = gsap.fromTo(
        marqueeContainer.children,
        { x: 0 },
        { x: distanceToTranslate, duration, ease: "none", repeat: -1 }
      );
      tween.progress(currProg);
    };
    playMarquee();

    function debounce(func) {
      var timer;
      return function (e) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(
          () => {
            func();
          },
          500,
          e
        );
      };
    }
    window.addEventListener("resize", debounce(playMarquee));
    return () => {
      window.removeEventListener("resize", debounce(playMarquee));
    };
  }, []);
  return (
    <div
      ref={marqueRef}
      duration={40}
      className="absolute py-2  min-w-96 w-full -rotate-[18.6deg] bg-primary -bottom-0 -right-20 md:-bottom-0 lg:-bottom-10 md:-right-40 xl:-right-72 flex gap-6 overflow-hidden whitespace-nowrap "
    >
      <div className="marquee-content flex gap-6">
        <p className="text-color text-4xl md:text-6xl lg:text-8xl  md:pt-4">
          PASSIONATE
        </p>
        <p className="text-color text-4xl md:text-6xl lg:text-8xl  md:pt-4">
          PASSIONATE
        </p>
        <p className="text-color text-4xl md:text-6xl lg:text-8xl  md:pt-4">
          PASSIONATE
        </p>
        <p className="text-color text-4xl md:text-6xl lg:text-8xl  md:pt-4">
          PASSIONATE
        </p>
      </div>
    </div>
  );
};

export default Marquee;
