import React, { forwardRef } from 'react';

const ChildrenWrapper = forwardRef((props, ref) => {
  return (
    <>
      <section
          ref={ref}
          className={`"content-wrapper absolute h-80 w-80 bg-red-400 z-10 left-1/2 scale-0 -translate-x-1/2 top-0"`}
        >
          <section className="h-screen bg-darker"></section>
          <section className="h-screen bg-darker mb-10"></section>
        </section>
    </>
  );
});

export default ChildrenWrapper;
