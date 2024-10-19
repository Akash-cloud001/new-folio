import React from "react";

const JourneyTextDesc = ({heading, content}) => {
  return (
    <div className=" text-color">
      <p className="journey-heading ff-semibold text-2xl tracking-wide">
        {heading}
      </p>
      <p className="journey-content ff-regular text-xl max-w-80 mt-2 tracking-wide">
        {content}
      </p>
    </div>
  );
};

export default JourneyTextDesc;
