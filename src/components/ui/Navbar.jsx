import React, { useEffect, useRef, useState } from "react";
import MenuBarIcon from "../svgComponents/MenuBarIcon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Twitter from "../svgComponents/Twitter";
import Linkedin from "../svgComponents/Linkedin";
import GithubLogo from "../svgComponents/GithubLogo";
import Marquee from "./Marquee";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const sideBarRef = useRef(null);
  const menuBarRef = useRef(null);
  const marqueRef = useRef(null);
  const navItemsRef = useRef(null);
  const socialItemsRef = useRef(null);
  const isFirstRender = useRef(true); // Track initial render

  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      name: "about me",
      link: "#about-me",
      classes: "text-8xl tracking-[5px]",
      anchorClasses: "text-dark-color uppercase opacity-80",
    },
    {
      name: "journey",
      link: "#journey",
      classes: "text-8xl tracking-[5px]",
      anchorClasses: "text-dark-color uppercase opacity-80",
    },
    {
      name: "skills",
      link: "#skills",
      classes: "text-8xl tracking-[5px]",
      anchorClasses: "text-dark-color uppercase opacity-80",
    },
    {
      name: "projects",
      link: "#projects",
      classes: "text-8xl tracking-[5px]",
      anchorClasses: "text-dark-color uppercase opacity-80",
    },
  ];

  const handleNavOpen = (event) => {
    event.stopPropagation(); 
    setIsOpen(!isOpen);
  };

  useEffect(() => {
      // Skip the animation on the first render
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }

      const tl = gsap.timeline({ paused: true });

    if (isOpen) {
      tl.to(sideBarRef.current, {
        x: "0%",
        duration: 0.5,
        ease: "expoScale(0.5,7,none)",
      });

      tl.to(menuBarRef.current.querySelector("#first-line"), {
        rotate: 45,
        transformOrigin: "35% 40%",
        duration: 0.5,
        ease: "back.out",
        fill: '#1d1d1d'
      },0);
      tl.to(menuBarRef.current.querySelector("#second-line"), {
        rotate: -45,
        transformOrigin: "30% 55%",
        duration: 0.5,
        ease: "back.out",
        fill: '#1d1d1d'
      },0);

      tl.fromTo(
        navItemsRef.current.children, {y: 50, opacity:0},
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          stagger: 0.15,
        },
        1
      )
      tl.fromTo(
        socialItemsRef.current.children, {y: 50, opacity:0},
        {
          y: 0,
          opacity: 1,
          ease: 'power3.out',
          stagger: 0.15,
        },
        2
      )
      tl.play();
    } else {
      tl.to(sideBarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "expoScale(0.5,7,none)",
      },2);

      tl.to(menuBarRef.current.querySelector("#first-line"), {
        rotate: 0,
        delay: 0.2,
        duration: 0.5,
        ease: "back.out",
        fill: '#f2e8de'
      },2);
      tl.to(menuBarRef.current.querySelector("#second-line"), {
        rotate: 0,
        delay: 0.2,
        duration: 0.5,
        ease: "back.out",
        fill: '#f2e8de'
      },2);

      tl.fromTo(
        navItemsRef.current.children, {y: 0, opacity:1},
        {
          y: 50,
          opacity: 0,
          ease: 'power3.out',
          stagger: 0.15,
        },
        1
      )

      tl.fromTo(
        socialItemsRef.current.children, {y: 0, opacity:1},
        {
          y: 50,
          opacity: 0,
          ease: 'power3.out',
          stagger: 0.15,
        },
        0
      )
      tl.play();
    }
  }, [isOpen]);


  return (
    <nav className="fixed z-20 px-4 sm:px-6 md:px-8 lg:px-11 py-4 w-full ff-humane-semi-bold text-5xl tracking-[3px] flex items-center justify-between">
      <p className=" top-0 left-0 text-color">AKASH FOLIO</p>
      <figure>
        <button
          type="button"
          onClick={handleNavOpen}
          className={`p-[14px] rounded-full  absolute z-30 top-4 right-4 sm:right-6 md:right-8 lg:right-11 transition-all  ${isOpen ? 'button-border-dark':'button-border-light'}`}
        >
          <MenuBarIcon ref={menuBarRef}  />
        </button>
      </figure>
      <div
        ref={sideBarRef}
        className={`overlay absolute h-screen overflow-hidden z-20 bg-light inset-0 px-4 sm:px-6 md:px-8 lg:px-11 py-4 flex justify-between items-center`}
        style={{ transform: "translateX(100%)" }} 
      >
        <ul ref={navItemsRef} className="list-none ff-humane-medium flex flex-col gap-11 items-start justify-center h-max ">
          {navItems.map((item, idx) => (
            <li className={item.classes} key={item.name}>
              <a href={item.link} className={item.anchorClasses}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <ul ref={socialItemsRef} className="flex gap-8">
          <li>
            <a href="#" className="p-[18px] rounded-full button-border-dark flex items-center justify-center">
              <Twitter className="h-9 w-9 fill-dark-text opacity-80" />
            </a>
          </li>
          <li>
            <a href="#" className="p-[18px] rounded-full button-border-dark flex items-center justify-center">
              <Linkedin className="h-9 w-9 fill-dark-text opacity-80" />
            </a>
          </li>
          <li>
            <a href="#" className="p-[18px] rounded-full button-border-dark flex items-center justify-center">
              <GithubLogo className="h-9 w-9 fill-dark-text opacity-80" />
            </a>
          </li>
        </ul>

        <Marquee />
       
      </div>
    </nav>
  );
};

export default Navbar;
