// import React, { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss';

// export default function useLocoScroll(start){
//     useEffect(() => {
//         if(!start) return

//         const container = document.querySelector('#main-containter');
//         const scroll = new LocomotiveScroll({
//             el: container,
//             smooth: true,
//             multiplier: 1,
//             class: "is-reveal"
//         })
//     }, [start])
// }

import React, { useEffect, useRef, useLayoutEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useLocoScroll = (start) => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        if (!start) return;

        const scrollEl = document.querySelector('#main-containter');

        let locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 0.65, // Effect Multiplier
            reloadOnContextChange: true,
            touchMultiplier: 2,
            smoothMobile: 0,
            smartphone: {
                smooth: !0,
                breakpoint: 767
            },
            tablet: {
                smooth: !1,
                breakpoint: 1024
            },
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollEl, {
            scrollTop(value) {
                if (locoScroll) {
                    return arguments.length
                        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
                        : locoScroll.scroll.instance.scroll.y;
                }
                return null;
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                };
            },
            pinType: document.querySelector("#main-containter").style.transform
                ? "transform"
                : "fixed"
        });

        const lsUpdate = () => {
            if (locoScroll) {
                locoScroll.update();
            }
        };

        // ScrollTrigger.defaults({ scroller: scrollEl });

        ScrollTrigger.defaults({
            scroller:
                document.documentElement.classList.contains("has-scroll-smooth") &&
                scrollEl
        });

        ScrollTrigger.addEventListener("refresh", lsUpdate);
        //ScrollTrigger.refresh();

        console.log("Loco-scroll initiated.");

        return () => {
            locoScroll.destroy();
            ScrollTrigger.removeEventListener("refresh", lsUpdate);
        };
    }, [start]);
};
export default useLocoScroll;