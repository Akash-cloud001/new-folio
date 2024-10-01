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
        start: "top center+=5%", 
        toggleActions: "play none none reverse",
      },
    });

    headerContain.current &&
      gsap.fromTo(
        headerContain.current,
        { opacity: 0, y: 200, x: "100%" },
        {
          scrollTrigger: {
            trigger: "#aboutMe",
            start: "top center+=5%", 
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.75,
          ease: "expoScale(0.5,7,none)",
        }
      );
      firstImg.current &&
      gsap.fromTo(
        firstImg.current,
        { opacity: 0, y: 200, x: "-100%" },
        {
          scrollTrigger: {
            trigger: firstImg.current,
            start: "top center", 
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "expoScale(0.5,7,none)",
        }
      );
      firstContent.current &&
      gsap.fromTo(
        firstContent.current,
        { opacity: 0, y: 100 },
        {
          scrollTrigger: {
            trigger: firstContent.current,
            start: "top top", 
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expoScale(0.5,7,none)",
        }
      );
      secondContent.current &&
      gsap.fromTo(
        secondContent.current,
        { opacity: 0, y: 150 },
        {
          scrollTrigger: {
            trigger: secondContent.current,
            start: "top top", 
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "expoScale(0.5,7,none)",
        }
      );
      secondImg.current &&
      gsap.fromTo(
        secondImg.current,
        { opacity: 0, y: 200 },
        {
          scrollTrigger: {
            trigger: secondImg.current,
            start: "top center", 
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "expoScale(0.5,7,none)",
        }
      );


  }, []);

  return (
    <section id="aboutMe" className="about-me h-max bg-dark ">
      <div className=" max-w-[1400px] mx-auto px-4 lg:px-8  xl:px-4">
        <figure
          ref={headerContain}
          className="pt-20 ml-auto relative overflow-hidden w-max mb-20 sm:mb-24"
        >
          <NameTagOne className="w-44 sm:w-72 lg:w-[350px] h-auto" />
          <p className="name-tag-one-content absolute text-[1.1rem] sm:text-2xl md:text-3xl secondary-neon ff-semibold">
            About Me
          </p>
        </figure>

        <section className="about-content">
          <figure ref={firstImg} className="md:w-full lg:w-1/2 h-auto mb-10 lg:mb-12">
            <img
              src="./firstImg.png"
              alt="akash img in show"
              // className="aspect-square"
            />
          </figure>
          <div ref={firstContent} className="mr-auto lg:ml-auto w-max mb-8">
            <TextStroke content="Hi," className="text-6xl lg:text-[5rem] xl:text-8xl ff-bold" />
            <p className="text-3xl sm:text-4xl lg:text-5xl ff-bold text-color tracking-wider mt-2 sm:mt-0 xl:mt-4">
              I'm <span className="secondary-neon"> Akash Parmar</span> 👋🏼
            </p>
          </div>
          <div ref={secondContent} className="ml-auto lg:mr-auto w-full lg:w-1/2 mb-10 lg:mb-16 xl:mb-20">
            <TextStroke content="A Developer" className="text-3xl sm:text-4xl ff-bold text-left lg:text-right" />
            <p className="text-xl sm:text-2xl ff-semibold text-color tracking-wider mt-3 w-full text-left lg:text-right">
            from India, committed to making easy-to-use and attractive websites.
            </p>
          </div>
        </section>
          <figure ref={secondImg} className="w-[35%] xl:w-2/5 h-auto pb-24 ml-auto">
            <img
              src="./firstImg.png"
              alt="akash img"
              // className="aspect-square"
            />
          </figure>
      </div>
    </section>
  );
};

export default About;
