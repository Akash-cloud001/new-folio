import React, { useEffect, useRef } from "react";
import NameTagOne from "./svgComponents/NameTagOne";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextStroke from "./ui/TextStroke";
import CurveText from "./svgComponents/CurveText";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerContain = useRef(null);
  // const aboutContent = useRef(null);
  // const firstImg = useRef(null);
  // const firstContent = useRef(null);
  // const secondContent = useRef(null);
  // const secondImg = useRef(null);
  useEffect(() => {
    //   gsap.fromTo(headerContain.current,{
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     y:0,
    //     opacity: 1,
    //     // ease: 'elastic.inOut',
    //     scrollTrigger:{
    //       trigger: '#aboutMe',
    //       start: 'top 70%',
    //       end: 'bottom bottom',
    //       duration: 0.75
    //     }
    //   }
    // )
    // gsap.fromTo(
    //   firstImg.current,
    //   {
    //     y: 100,
    //     opacity: 0
    //   },
    //   {
    //     y:0,
    //     opacity: 1,
    //     // ease: 'elastic.inOut',
    //     scrollTrigger:{
    //       trigger: firstImg.current,
    //       start: 'top 70%',
    //       end: 'bottom bottom',
    //       duration: 0.5
    //     }
    //   }
    // )

  }, []);

  return (
    <section id="aboutMe" className="about-me h-max bg-dark pb-24">
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

        <section className="flex items-start justify-between h-full max-h-[750px] overflow-hidden">
          <figure className="w-1/2 max-w-[600px] h-full ">
            <img className="object-cover w-full h-full" src="./akashInSnow.png" alt="akash in snow image" />
          </figure>
          <article className="w-2/5 flex flex-col items-start gap-11 h-[750px]">
            <div>
              <TextStroke
                content="Hi,"
                className="text-6xl lg:text-[5rem] xl:text-8xl ff-bold"
              />
              <p className="text-3xl sm:text-4xl lg:text-[44px] ff-bold text-color tracking-wider mt-2 sm:mt-0 xl:mt-4">
                I'm <span className="secondary-neon"> Akash Parmar</span> 👋🏼
              </p>
            </div>
            <div >
              <TextStroke
                content="A Developer"
                className="text-3xl sm:text-4xl ff-bold text-left "
              />
              <p className="text-xl sm:text-2xl ff-semibold text-color tracking-wider mt-3 text-left ">
                from India, committed to making easy-to-use and attractive
                websites.
              </p>
            </div>

            <div className="anime-name-container absolute -bottom-[56%] right-[5%]"> 
              <CurveText />
              <img src="./akashAnime.png" alt="akash in anime image" className="h-56 w-56 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default About;
