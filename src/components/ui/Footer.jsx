import React, { useLayoutEffect, useRef } from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const tyRef = useRef(null);

  useLayoutEffect(() => {
    if (!tyRef.current) {
      return;
    }

    const text = tyRef.current.innerText.split('');

    tyRef.current.innerText = '';


    text.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      tyRef.current.appendChild(span);
      span.classList.add('inline-block')
    });

    const spans = tyRef.current.querySelectorAll('span');

    // GSAP animation with stagger
    gsap.fromTo(
      spans,
      { opacity: 0, y: 50 }, // Starting state: invisible and below the view
      {
        opacity: 1,
        y: 0, // Ending state: visible and in place
        stagger: 0.1, // Stagger delay between each character
        duration: 0.5, // Animation duration
        ease: 'power2.out', // Easing for a smooth animation
        scrollTrigger:{
          trigger:tyRef.current,
          start: 'top 90%',
          end: 'bottom bottom+=100px',
          scrub: 1
        }
      }
    );


  }, []);

  return (
    <section className='md:h-[70vh] lg:h-[80vh] overflow-hidden w-full bg-light relative'>
      <p ref={tyRef} className='pt-0 mt-0 2xl:-mt-20 text-[40vw] lg:text-[52vh] xl:text-[64vh] 2xl:text-[72vh] ff-humane-semi-bold tracking-wider text-center text-dark-color'>
        THANK YOU
      </p>
      <p className='absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-10 text-xs sm:text-lg lg:text-xl ff-regular tracking-wide opacity-70 text-center w-screen'>
        DESIGNED & BUILT BY AKASH PARMAR © ALL COPYRIGHTS RESERVED 2024
      </p>
    </section>
  );
}

export default Footer;
