import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import TextStroke from "./ui/TextStroke";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./ui/Header";
import JourneyHead from "./svgComponents/JourneyHead";
gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const journeyMainRef = useRef(null);
  const journeyContentRef = useRef(null);
  const svgRef = useRef();
  const pathRef = useRef();
  const headerContainer = useRef();
  const headerRef = useRef();
  const [svgWidth, setSvgWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (headerContainer.current) {
        setSvgWidth(headerContainer.current.clientWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const initialPath = `M 0 60 Q 0 60 ${svgWidth} 60`;
  const handleMouseMove = (e) => {
    const controlPointX =
      (e.clientX - headerContainer.current.getBoundingClientRect().left) * 1.25;
    const controlPointY =
      (e.clientY - headerContainer.current.getBoundingClientRect().top) * 1.5;
    const finalPath = `M 0 60 Q ${controlPointX} ${controlPointY} ${svgWidth} 60`;

    gsap.to(pathRef.current, {
      attr: { d: finalPath },
      duration: 1.25,
      ease: "elastic.out(1,0.4)",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(pathRef.current, {
      attr: { d: initialPath },
      duration: 1.25,
      ease: "elastic.out(1,0.4)",
    });
    return;
  };
  return (
    <section
      ref={journeyMainRef}
      id="journey"
      className="journey-container relative -mt-0 md:mt-24 px-4 sm:px-6 md:px-8 lg:px-11 w-full max-w-[1400px] mx-auto"
    >
      {/* <Header headingName={'JOURNEY'} /> */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between w-full gap-4 md:gap-10">
        <aside className="relative z-[0] w-full md:w-[60%] border border-white">
          <article className="md:mt-16 sm:mt-20 mb-5 sm:mb-10">
            <aside className="flex flex-col items-start gap-8 sm:flex-row sm:items-center justify-start sm:gap-16">
              <div>
                <TextStroke
                  content="2024"
                  className="text-5xl w-max sm:text-6xl tracking-wider ff-bold "
                />
              </div>
              <ul className="flex flex-col items-start justify-center gap-8 max-w-md">
                <li className="text-color ">
                  <h4 className="text-xl sm:text-2xl ff-semibold">
                    Jan-Currently
                  </h4>
                  <p className="text-lg sm:text-xl ff-regular">
                    Working in EvoMorf as an Ui Designer/Developer
                  </p>
                </li>
                <li className="text-color ">
                  <h4 className="text-xl sm:text-2xl ff-semibold">October</h4>
                  <p className="text-lg sm:text-xl ff-regular">
                    Participated in Hacktoberfest 2024 and completed it
                    successfully
                  </p>
                </li>
                <li className="text-color ">
                  <h4 className="text-xl sm:text-2xl ff-semibold">November</h4>
                  <p className="text-lg sm:text-xl ff-regular">
                    Won first Prize in Designing a web template using AI on{" "}
                    <a href="https://webcrumbs.org">webcrumbs.org</a>{" "}
                  </p>
                </li>
              </ul>
            </aside>
          </article>

          <figure ref={headerContainer} className="w-full">
            <svg
              ref={svgRef}
              width={svgWidth}
              height="150"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <path
                ref={pathRef}
                d={`M 00 60 Q 0 60 ${svgWidth} 60`}
                stroke="white"
                strokeWidth={2}
                fill="transparent"
              />
            </svg>
          </figure>

          <article className="mt-0 sm:mt-10">
            <aside className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-16">
              <div>
                <TextStroke
                  content="2023"
                  className="text-5xl sm:text-6xl tracking-wider ff-bold "
                />
              </div>
              <ul className="flex flex-col items-start justify-center gap-8 max-w-md">
                <li className="text-color ">
                  <h4 className="text-xl sm:text-2xl ff-semibold">
                    April - August
                  </h4>
                  <p className="text-lg sm:text-xl ff-regular">
                    Internship At Accenture as a security-delivery associate.
                  </p>
                </li>
                <li className="text-color ">
                  <h4 className="text-xl sm:text-2xl ff-semibold">July</h4>
                  <p className="text-lg sm:text-xl ff-regular">
                    Graduated from College, with{" "}
                    <span className="font-semibold">8.34 CGPA</span>
                  </p>
                </li>
                <li className="text-color ">
                  <h4 className="text-xl sm:text-2xl ff-semibold">
                    September - October
                  </h4>
                  <p className="text-lg sm:text-xl ff-regular">
                    Software Developer Trainee at HummingBird Web Solution{" "}
                  </p>
                </li>
              </ul>
            </aside>
          </article>
        </aside>

        <figure className="block md:hidden text-[110px] md:h-dvh ff-humane-bold white-text-grad tracking-wide">
          JOURNEY
          {/* <JourneyHead className="h-full w-full md:w-[400px]"/> */}
        </figure>
        <p className="hidden md:block md:h-dvh w-1/3">
          <JourneyHead className="h-full w-full "/>
        </p>
      </div>
    </section>
  );
};

export default Journey;
