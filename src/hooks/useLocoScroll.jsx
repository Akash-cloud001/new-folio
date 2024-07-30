import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useLocoScroll(start){
    useEffect(() => {
        if(!start) return

        const container = document.querySelector('#main-containter');
        const scroll = new LocomotiveScroll({
            el: container,
            smooth: true,
            multiplier: 1,
            class: "is-reveal"
        })
    }, [start])
}