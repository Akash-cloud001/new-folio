import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Header({ headingName }) {
  const headerRef = useRef();
  const svgRef = useRef();
  const pathRef = useRef();
  const headerContainer = useRef();
  const [svgWidth, setSvgWidth] = useState(0);

  useEffect(() => {
    const alphabets = headerRef.current.innerText.split("");
    const midpoint = Math.ceil(alphabets.length / 2);
    headerRef.current.innerHTML = alphabets
      .map((alpha) => `<span>${alpha}</span>`)
      .join("");

    const spans = headerRef.current.querySelectorAll("span");
    const firstHalf = Array.from(spans).slice(0, midpoint);
    const secondHalf = Array.from(spans).slice(midpoint);
    setSvgWidth(headerRef.current.clientWidth);
    // Animate first half

    gsap.from(firstHalf, {
      y: -75,
      opacity: 0,
      duration: 0.75,
      stagger: 0.05,
      ease: "bounce.out",
    });

    // Animate second half
    gsap.from(secondHalf, {
      y: -75,
      opacity: 0,
      duration: 0.75,
      stagger: -0.05,
      ease: "bounce.out",
    });
  }, []);

  return (
    <div ref={headerContainer} className="headerContainer">
      <p className="ff-humane-bold flex items-center sm:justify-start gap-4 w-full sm:w-max justify-between">
        <span className=" text-6xl header-gradient opacity-80">{"{"} </span>
        <span className=" text-5xl header-gradient pt-1 uppercase tracking-wider" ref={headerRef} >
          {headingName}
        </span>
        <span className=" text-6xl header-gradient opacity-80"> {"}"} </span>
      </p>
    </div>
  );
}

export default Header;
