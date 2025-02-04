import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useLayoutEffect,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "./ui/Loading";
import Scene from "./ui/Scene";
import BugIcon from "./svgComponents/BugIcon";

gsap.registerPlugin(useGSAP);

const CustomCamera = ({ skyborgRef }) => {
  const { camera } = useThree();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const radius = 7;
  const minAzimuthalAngle = -(25 * Math.PI) / 180;
  const maxAzimuthalAngle = (100 * Math.PI) / 180;

  const dampingFactor = 1;

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMousePos({ x: 0, y: 0 });
    } else {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    let azimuthalAngle = mousePos.x * Math.PI;

    const deltaX = mousePos.x - prevMousePos.current.x;

    const clampedDeltaX = deltaX * dampingFactor;
    azimuthalAngle = azimuthalAngle - clampedDeltaX;
    azimuthalAngle = Math.max(
      minAzimuthalAngle,
      Math.min(maxAzimuthalAngle, azimuthalAngle)
    );
    const newX = radius * Math.sin(azimuthalAngle);
    const newZ = radius * Math.cos(azimuthalAngle);
    // Use GSAP to smoothly update the camera's position
    gsap.to(camera.position, {
      x: newX,
      y: -mousePos.y * 1, // Adjust height based on mouse Y
      z: newZ,
      duration: 2, // Smooth transition
      ease: "power2.out",
    });
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    prevMousePos.current = mousePos;
  });

  return null;
};

const Hero = forwardRef((props, ref) => {
  const firstWord = useRef();
  const secondWord = useRef();
  const letters = "abcdefghijklmnopqrstuvwxyz";
  
  useLayoutEffect(() => {
    if (firstWord.current) {
      console.log("in method");
      let iterations = 0;
      const wordLen = 8;
      const currWord = "creative";
      let interval = null;
      clearInterval(interval);
      interval = setInterval(() => {
        firstWord.current.innerText = firstWord.current.innerText
          .split("")
          .map((letter, idx) => {
            if (idx < iterations) {
              return currWord[idx];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iterations >= wordLen) clearInterval(interval);
        iterations += 2/3;
      }, 100);
    }
    if (secondWord.current) {
      console.log("in method");
      let iterations = 0;
      const wordLen = 8;
      const currWord = "Engineer";
      let interval = null;
      clearInterval(interval);
      interval = setInterval(() => {
        secondWord.current.innerText = secondWord.current.innerText
          .split("")
          .map((letter, idx) => {
            if (idx < iterations) {
              return currWord[idx];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (iterations >= wordLen) clearInterval(interval);
        iterations += 2/3;
      }, 100);
    }
  }, []);

  return (
    <section
      ref={ref}
      className="flex flex-col items-center w-full lg:justify-center relative lg:mt-0 max-w-[1400px] mx-auto pt-4 h-screen overflow-x-hidden"
    >
      <section className="first-half flex flex-row items-start gap-2 sm:gap-4 z-10 md:z-0 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-7xl sm:text-[9em] lg:text-[14em] xl:text-[19em] 2xl:text-[22em] transition-all">
        <p ref={firstWord} className="hero-text-stroke uppercase transition-all">
          Creative
        </p>
        <p
          ref={secondWord}
          className="uppercase text-color tracking-wider ff-humane-bold transition-all"
        >
          Engineer
        </p>
      </section>
      <section className="hero-container h-full relative w-full mx-auto -mt-20 sm:mt-0">
        <Canvas
          shadows={true}
          dpr={[1, 2]}
          camera={{ position: [0, 1.5, 5.58], fov: 55 }}
        >
          <Suspense fallback={<Loading />}>
            <CustomCamera />
            <Scene />
          </Suspense>
        </Canvas>
      </section>
      <section>
        <p className="flex text-color gap-2 sm:gap-3 absolute left-1/2 -translate-x-1/2 bottom-[120px] sm:bottom-2 tracking-wider sm:tracking-widest ff-regular w-max text-xs sm:text-base ">
          TURNING <BugIcon className="h-6 sm:h-8" /> INTO FEATURES SINCE 2022
        </p>
      </section>
    </section>
  );
});

export default Hero;
