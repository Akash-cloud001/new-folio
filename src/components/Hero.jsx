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
      className="flex flex-col items-center w-full lg:justify-center relative lg:mt-0 max-w-[1400px] mx-auto pt-4 h-screen"
    >
      <section className="first-half flex flex-row items-start gap-2 sm:gap-4 z-10 md:z-0 absolute top-auto bottom-[150px] sm:bottom-auto sm:top-24 left-1/2 -translate-x-1/2">
        <TextStroke
          content="creative"
          className="text-[28px] sm:text-3xl md:text-4xl  ff-bold uppercase"
        />
        <p className="text-[28px] sm:text-3xl md:text-4xl  ff-bold text-color tracking-wider">
          <span className=" uppercase">Engineer</span>
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
            {/* <color args={["#151515"]} attach="background" /> */}
            <Scene />
          </Suspense>
        </Canvas>
      </section>
      <section>
        <p className="flex text-color gap-2 sm:gap-3 absolute left-1/2 -translate-x-1/2 bottom-[120px] sm:bottom-2 tracking-wider sm:tracking-widest ff-regular w-max text-xs sm:text-base md:text-lg">
          TURNING <BugIcon className="h-6 sm:h-8" /> INTO FEATURES SINCE 2022
        </p>
      </section>
    </section>
  );
});

export default Hero;
