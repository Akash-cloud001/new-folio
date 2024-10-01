import React, { useEffect, useRef } from 'react'
import NameTagOne from './svgComponents/NameTagOne'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const About = () => {
  const headerContain = useRef(null)
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutMe",
        start: "top center", // Start when the top of the section hits the center of the viewport
        end: "bottom top", // End when the bottom of the section hits the top of the viewport
        // scrub: 1,
        // pin: true, // Optional: pins the section while scrolling
        toggleActions: "play none none reverse", 
      },
    });

    headerContain.current && tl.fromTo(headerContain.current,
      {opacity: 0, y: 200, x:'100%'},
      {opacity: 1, y: 0, x:0, duration: 0.75 ,ease: "expoScale(0.5,7,none)" }
    )
  },[])

  return (
    <section id="aboutMe" className='about-me h-[200vh] bg-dark '>
      <div className=' max-w-[1400px] mx-auto'>
        <figure ref={headerContain} className='pt-20 px-4 float-right relative overflow-hidden'>
          <NameTagOne className="w-[350px] h-auto" />
          <p className='name-tag-one-content absolute text-3xl secondary-neon ff-semibold'>
            About Me 
          </p>
        </figure>
      </div>
    </section>
  )
}

export default About