import React, { useEffect, useRef } from "react";
import NameTagOne from "./svgComponents/NameTagOne";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextStroke from "./ui/TextStroke";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerContain = useRef(null);
  const firstImg = useRef(null);
  const firstContent = useRef(null);
  const secondContent = useRef(null);
  const secondImg = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutMe",
        start: "top center+=5%", // Start when the top of the section hits the center of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // scrub: 1,
        // pin: true, // Optional: pins the section while scrolling
        toggleActions: "play none none reverse",
      },
    });

    headerContain.current &&
      tl.fromTo(
        headerContain.current,
        { opacity: 0, y: 200, x: "100%" },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.75,
          ease: "expoScale(0.5,7,none)",
        },0
      );
      firstImg.current &&
      tl.fromTo(
        firstImg.current,
        { opacity: 0, y: 200, x: "-100%" },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "expoScale(0.5,7,none)",
        },1
      );
      firstContent.current &&
      tl.fromTo(
        firstContent.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expoScale(0.5,7,none)",
        },2
      );
      secondContent.current &&
      tl.fromTo(
        secondContent.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "expoScale(0.5,7,none)",
        },2
      );
      secondImg.current &&
      tl.fromTo(
        secondImg.current,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "expoScale(0.5,7,none)",
        },3
      );


  }, []);

  return (
    <section id="aboutMe" className="about-me h-max bg-dark ">
      <div className=" max-w-[1400px] mx-auto  px-4">
        <figure
          ref={headerContain}
          className="pt-20 ml-auto relative overflow-hidden w-max"
        >
          <NameTagOne className="w-[350px] h-auto" />
          <p className="name-tag-one-content absolute text-3xl secondary-neon ff-semibold">
            About Me
          </p>
        </figure>

        <section className="about-content">
          <figure ref={firstImg} className="w-2/5 h-auto mt-24">
            <img
              src="./firstImg.png"
              alt="akash img in show"
              // className="aspect-square"
            />
          </figure>
          <div ref={firstContent} className="ml-auto w-max mt-12">
            <TextStroke content="Hi," className="text-8xl ff-bold" />
            <p className="text-5xl ff-bold text-color tracking-wider mt-4">
              I'm <span className="secondary-neon"> Akash Parmar</span> 👋🏼
            </p>
          </div>
          <div ref={secondContent} className="mr-auto w-1/2 mt-8">
            <TextStroke content="A Developer" className="text-5xl ff-bold text-right" />
            <p className="text-3xl ff-semibold text-color tracking-wider mt-3 w-full text-right">
            from India, committed to making easy-to-use and attractive websites.
            </p>
          </div>
          <figure ref={secondImg} className="w-2/5 h-auto mt-24 pb-24 ml-auto">
            <img
              src="./secondImg.png"
              alt="akash img"
              // className="aspect-square"
            />
          </figure>
        </section>
      </div>
    </section>
  );
};

export default About;
