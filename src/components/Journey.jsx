import React from "react";
import TextStroke from "./ui/TextStroke";

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
            <div className="mt-[72px] text-color">
              <p className="journey-heading ff-semibold text-2xl tracking-wide">
                Jan-Currently
              </p>
              <p className="journey-content ff-regular text-xl max-w-60 mt-2 tracking-wide">
                Working in Evomorf as an UI Developer.
              </p>
            </div>
          </div>
          <div className="years-card h-full ">
            <TextStroke
              content="2019"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
          </div>
          <div className="years-card h-full ">
            <TextStroke
              content="2018"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
          </div>
          <div className="years-card h-full ">
            <TextStroke
              content="2016"
              className="text-6xl tracking-wider ff-bold absolute -top-8 right-4"
            />
          </div>
          <div className="years-card h-full "></div>
        </aside>
        <h1 className="text-color ff-semibold tracking-wide text-[17vw] whitespace-nowrap opacity-20 -mt-10 mb-2">
          A Lifelong Quest for Learning and Growth
        </h1>
      </div>
    </section>
  );
};

export default Journey;
