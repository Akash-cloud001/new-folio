import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import "../App.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Loading from "./ui/Loading";
import Scene from "./ui/Scene";
import { useControls } from "leva";
import BugIcon from "./svgComponents/BugIcon";
import TextStroke from "./ui/TextStroke";

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
      // true for mobile device
      // document.write("mobile device");
      setMousePos({ x: 0, y: 0 });
    } else {
      // false for not mobile device
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
  return (
    <section
      ref={ref}
      className="flex flex-col-reverse md:flex-row items-center h-auto w-full lg:justify-between relative lg:mt-0"
    >
      <section className="first-half flex flex-col items-start gap-3 mb-20 lg:mb-0 pl-4 sm:pl-6 md:pl-8 lg:pl-11 -mt-24 z-10 md:z-0 md:mt-0">
        <TextStroke
          content="Hi,"
          className="text-3xl sm:text-5xl xl:text-6xl ff-bold"
        />
        <p className="text-2xl sm:text-3xl lg:text-4xl ff-bold text-color tracking-wider">
          I'm <span className="secondary-neon"> Akash Parmar</span>{" "}
          <span className="wave">👋🏼</span>
        </p>
        <p className="text-lg sm:text-xl ff-medium text-color tracking-wider -mt-1 max-w-lg">
          from India, committed to making easy-to-use and attractive websites.
        </p>
      </section>
      <section className="hero-container relative h-[85dvh] md:h-dvh w-full md:w-1/2 lg:w-2/3">
        <Canvas
          shadows={true}
          dpr={[1, 2]}
          camera={{ position: [0, 1.5, 5.58], fov: 55 }}
        >
          <Suspense fallback={<Loading />}>
            <CustomCamera />
            <color args={["#151515"]} attach="background" />
            <Scene />
          </Suspense>
        </Canvas>
      </section>
        <article className=" hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 items-center justify-center gap-2 sm:gap-3 text-color tracking-wider sm:tracking-widest ff-regular text-xs xm:text-sm  w-full">
         TURNING <BugIcon className="h-6 sm:h-8" /> INTO FEATURES SINCE 2022.
        </article>
    </section>
  );
});

export default Hero;
