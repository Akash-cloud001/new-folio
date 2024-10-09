import React, { useEffect, forwardRef } from 'react';
import About from './About';
import Journey from './Journey';

const ComponentsWrapper = forwardRef(({ marginTop }, ref) => {
    useEffect(() => {
        // You can add logic here if you need to respond to changes in marginTop
        // ref.current.style.marginTop = marginTop+'px';
    }, [marginTop]);

    return (
        <section
            ref={ref}
            className={`h-dvh w-full absolute z-50 top-[${marginTop}px]`}
        >
            {/* Content goes here */}
            <About />
            <Journey />
        </section>
    );
});

export default ComponentsWrapper;
