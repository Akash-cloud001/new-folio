import React, { Suspense, useEffect, useRef } from "react";
import NameTagOne from "./svgComponents/NameTagOne";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextStroke from "./ui/TextStroke";
import CurveText from "./svgComponents/CurveText";
import { Canvas } from "@react-three/fiber";
import ImageShader from "./3DComponents/ImageShader";
import CubicalShapeOne from "./svgComponents/CubicalShapeOne";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headerContain = useRef(null);
  const aboutContent = useRef(null);
  const firstImg = useRef(null);
  const firstContent = useRef(null);
  const secondContent = useRef(null);
  const secondImg = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      headerContain.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        // ease: 'elastic.inOut',
        scrollTrigger: {
          trigger: "#aboutMe",
          start: "top 70%",
          end: "bottom bottom",
        },
        duration: 0.75,
      }
    );
    gsap.fromTo(
      firstImg.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.7,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        // ease: 'elastic.inOut',
        scrollTrigger: {
          trigger: firstImg.current,
          start: "top 80%",
          end: "bottom bottom",
        },
        duration: 0.5,
      }
    );
    gsap.fromTo(
      firstContent.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutContent.current,
          start: "top 60%",
        },
        delay: 0.2,
      }
    );
    gsap.fromTo(
      secondContent.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: aboutContent.current,
          start: "top 60%",
        },
        delay: 0.5,
      }
    );
    gsap.fromTo(
      secondImg.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: secondImg.current,
          start: "top 70%",
        },
        delay: 0.2
      },
    );
  }, []);

  return (
    <section id="aboutMe" className="about-me relative h-max bg-dark pb-0 lg:pb-32">
      <div className=" max-w-[1400px] mx-auto px-4 lg:px-8  xl:px-4">
        <figure
          ref={headerContain}
          className="pt-20 ml-auto relative overflow-hidden w-max mb-16 sm:mb-16"
        >
          <NameTagOne className="w-56 sm:w-72 lg:w-[350px] h-auto" />
          <p className="name-tag-one-content absolute text-lg sm:text-2xl lg:text-3xl secondary-neon ff-semibold">
            About Me
          </p>
        </figure>

        <section
          ref={aboutContent}
          className="flex flex-col lg:flex-row items-start justify-between h-full w-full lg:max-h-[750px] overflow-hidden relative "
        >
          <figure
            ref={firstImg}
            className=" mx-auto w-full h-[300px] sm:h-[500px] lg:hidden"
          >
            <img
              className="object-cover w-full h-full"
              src="./akashInSnow.png"
              alt="akash in snow image"
            />
          </figure>
          <figure
            className="hidden lg:block lg:h-[750px] lg:w-1/2 lg:max-w-[600px]"
          >
            <Canvas
              dpr={[1, 2]}
              camera={[45, window.innerWidth / window.innerHeight, 0.1, 100]}
            >
              <Suspense>
                <ImageShader textureSrc={"./akashInSnow.png"} />
              </Suspense>
            </Canvas>
          </figure>
          <article className="mt-11 lg:mt-0w-full lg:w-2/5 flex flex-col items-start gap-11 h-[700px] sm:h-[700px] lg:h-[750px] relative">
            <div ref={firstContent}>
              <TextStroke
                content="Hi,"
                className="text-4xl sm:text-6xl xl:text-7xl ff-bold"
              />
              <p className="text-2xl sm:text-3xl lg:text-4xl ff-bold text-color tracking-wider mt-2 sm:mt-0 xl:mt-4">
                I'm <span className="secondary-neon"> Akash Parmar</span>{" "}
                <span className="wave">👋🏼</span>
              </p>
            </div>
            <div ref={secondContent}>
              <TextStroke
                content="A Developer"
                className="text-3xl sm:text-4xl ff-bold text-left "
              />
              <p className="text-lg sm:text-xl ff-medium text-color tracking-wider mt-2 text-left">
                from India, committed to making easy-to-use and attractive
                websites.
              </p>
            </div>

            <div
              ref={secondImg}
              className="anime-name-container relative mx-auto lg:absolute -bottom-4 sm:bottom-0 lg:bottom-12 lg:right-0" 
            >
              <CurveText />
              <img
                src="./akashAnime.png"
                alt="akash in anime image"
                className="h-56 w-56 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </article>
        </section>

      </div>
      <CubicalShapeOne className="absolute z-50 rotate-180 -scale-x-100 right-0  -bottom-[95px]" />
    </section>
  );
};

export default About;
