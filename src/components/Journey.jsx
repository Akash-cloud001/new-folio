import React from "react";
import TextStroke from "./ui/TextStroke";
import JourneyTextDesc from "./ui/JourneyTextDesc";

const Journey = () => {
  return (
    <section
      id="journey"
      className="journey-container bg-darker relative overflow-x-hidden"
    >
      <div className="journey-wrapper flex items-start flex-col absolute top-1/3 -translate-y-1/3 h-screen">
        <aside className="horizontal-calandar flex items-start justify-start  h-3/5">
          <div className="years-card h-full relative">
            <TextStroke
              content="2024"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
          </div>
          <div className="years-card h-full ">
            <TextStroke
              content="2023"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
            <section className="mt-[72px]">
              <JourneyTextDesc
                heading={"Jan-Currently"}
                content={"Working in Evomorf as an UI Developer"}
              />
            </section>
          </div>
          <div className="years-card h-full ">
            <TextStroke
              content="2019"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
            <section className="flex flex-col items-start justify-start gap-4 mt-[72px]">
              <JourneyTextDesc
                heading={"April - August"}
                content={
                  "Internship at Accenture as a Security-delivery Associate"
                }
              />
              <JourneyTextDesc
                heading={"July"}
                content={"Graduated from college, with 8.34 CGPA"}
              />
              <JourneyTextDesc
                heading={"Sept-Oct"}
                content={
                  "Software Developer Trainee at HummingBird Web Solution"
                }
              />
            </section>
          </div>
          <div className="years-card h-full ">
            <TextStroke
              content="2018"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
            <section className="mt-[72px]">
              <JourneyTextDesc
                heading={"July"}
                content={"Started my Graduation"}
              />
            </section>
          </div>
          <div className="years-card h-full ">
            <TextStroke
              content="2 - - -"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
            <section className="mt-[72px]">
              <JourneyTextDesc
                heading={"May"}
                content={"Completed my Senior Secondary, with 79%"}
              />
            </section>
          </div>
          <div className="years-card h-full ">
            <section className="mt-[72px]">
              <JourneyTextDesc
                heading={"Rest of My Life"}
                content={"..."}
              />
            </section>
          </div>
        </aside>
        <h1 className="text-color ff-semibold tracking-wide text-[185px] whitespace-nowrap opacity-20 -mt-10 mb-2">
          {/* A Lifelong Quest for Learning and Growth */}
          The Journey of Learn and Grow
        </h1>
      </div>
    </section>
  );
};

export default Journey;
