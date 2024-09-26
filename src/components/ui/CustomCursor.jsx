import React , { useEffect, useRef }  from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    console.log(document.querySelectorAll("button"), "buttons");
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.1;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateCursor() {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      gsap.set(cursorRef.current, {
        x: cursorX,
        y: cursorY,
      });

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const totalBtn = document.querySelectorAll("button");
    const tatalP = document.querySelectorAll("p");
    const tatalAnchor = document.querySelectorAll("a");
    totalBtn.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 3,
          duration: 0.1,
          ease: "bounce.in",
        });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1, // Reset cursor size
          duration: 0.1,
          ease: "bounce.out",
        });
      });
    });
    tatalP.forEach((p) => {
      p.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 2,
          duration: 0.1,
          ease: "bounce.in",
        });
      });
      p.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1, // Reset cursor size
          duration: 0.1,
          ease: "bounce.out",
        });
      });
    });
    tatalAnchor.forEach((a) => {
      a.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, {
          scale: 4,
          duration: 0.1,
          ease: "bounce.in",
        });
      });
      a.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, {
          scale: 1, // Reset cursor size
          duration: 0.1,
          ease: "bounce.out",
        });
      });
    });

    // Clean up event listeners on unmount
    return () => {
      totalBtn.forEach((button) => {
        button.removeEventListener("mouseenter", null);
        button.removeEventListener("mouseleave", null);
      });
      tatalP.forEach((p) => {
        p.removeEventListener("mouseenter", null);
        p.removeEventListener("mouseleave", null);
      });
      tatalAnchor.forEach((a) => {
        a.removeEventListener("mouseenter", null);
        a.removeEventListener("mouseleave", null);
      });
    };
  }, []);
  return (
    <div
      ref={cursorRef}
      id="cursor"
      className="z-20 h-4 w-4 rounded-full  fixed top-0 left-0 mix-blend-difference"
    ></div>
  );
};

export default CustomCursor;
