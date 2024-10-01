import React, { forwardRef } from 'react';
import About from './About';

const ChildrenWrapper = forwardRef((props, ref) => {
  return (
    <>
      <section
          ref={ref}
          className={`"content-wrapper absolute rounded-full h-80 w-80 overflow-hidden z-10 left-1/2 scale-0 -translate-x-1/2 top-[${window.innerHeight / 2 - 160} -translate-y-[${window.innerHeight / 2 - 160}]"`}
        >
          {/* <section className="h-screen bg-light"></section> */}
          <About />
          <section className="h-screen bg-light mb-10 w-100"></section>
        </section>
    </>
  );
});

export default ChildrenWrapper;
