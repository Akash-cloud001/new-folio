import { useEffect, useRef, useState } from 'react'
import './App.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function Header({headingName}) {
    const headerRef = useRef();
    const svgRef = useRef();
    const pathRef = useRef();
    const headerContainer = useRef();
    const [svgWidth, setSvgWidth] = useState(0)


    useEffect(() => {



        const alphabets = headerRef.current.innerText.split('');
        const midpoint = Math.ceil(alphabets.length / 2);
        headerRef.current.innerHTML = alphabets.map(alpha => `<span>${alpha}</span>`).join('');

        const spans = headerRef.current.querySelectorAll('span');
        const firstHalf = Array.from(spans).slice(0, midpoint);
        const secondHalf = Array.from(spans).slice(midpoint);
        setSvgWidth(headerRef.current.clientWidth)
        // Animate first half


        gsap.from(firstHalf, {
            y: -75,
            opacity: 0,
            duration: 0.75,
            stagger: 0.05,
            ease: "bounce.out"
        });

        // Animate second half
        gsap.from(secondHalf, {
            y: -75,
            opacity: 0,
            duration: 0.75,
            stagger: -0.05,
            ease: "bounce.out"
        });

    }, []);

    useEffect(()=>{
        const handleResize = () => {
            setSvgWidth(headerRef.current.clientWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();


        return () => {
            window.removeEventListener('resize', handleResize);
        };

    },)
    
    const initialPath = `M 0 60 Q 0 60 ${svgWidth} 60`;
    const handleMouseMove = (e) => {
        e.stopPropagation()
        const relativeX = e.clientX - headerContainer.current.getBoundingClientRect().left;
        const controlPointX = relativeX;
        const controlPointY = e.clientY - headerContainer.current.getBoundingClientRect().top;
        const finalPath = `M 0 60 Q ${controlPointX} ${controlPointY} ${svgWidth} 60`;

        gsap.to(pathRef.current, {
            attr: { d: finalPath },
            duration: 1.25,
            ease: "elastic.out(1,0.4)"

        });
    };

    const handleMouseLeave = () => {
        gsap.to(pathRef.current, {
            attr: { d: initialPath },
            duration: 1.25,
            ease: "elastic.out(1,0.4)"
        });
        return
    };

    return (
        <div ref={headerContainer} className='headerContainer' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}  >
            <header ref={headerRef} className='heading ff-bold'>
                {headingName}
            </header>
            <svg ref={svgRef} width={svgWidth} height="150" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef} d={`M 00 60 Q 0 60 ${svgWidth} 60`} stroke="white" strokeWidth={2} fill="transparent" />
            </svg>
        </div>
    )
}

export default Header
