import { Text3D } from "@react-three/drei";
import React, { forwardRef } from "react";
import fontFamily from "../../assets/fonts/Clash_Display.json";
import texture from "../../assets/textures/redMatCap.png";
import { useTexture } from "@react-three/drei";
const Text = forwardRef(
  (
    {
      alphabet,
      size = 1,
      height = 0.3,
      curveSegments = 36,
      bevelThickness = 0.01,
      bevelSize = 0.01,
      bevelOffset = 0,
      bevelSegments = 1,
      position = [0, 0, 0],
      textScale=1
    },
    ref
  ) => {
    const matTexture = useTexture(texture);
    return (
      alphabet && (
        <Text3D
        ref={ref}
          font={fontFamily}
          size={size}
          height={height}
          curveSegments={curveSegments}
          bevelEnabled
          bevelThickness={bevelThickness}
          bevelSize={bevelSize}
          bevelOffset={bevelOffset}
          bevelSegments={bevelSegments}
          position={position}
          scale={textScale}
        >
          {alphabet}
          <meshMatcapMaterial matcap={matTexture} />
        </Text3D>
      )
    );
  }
);
// const Text = ({
//   alphabet,
//   size = 1.25,
//   height = 0.4,
//   curveSegments = 36,
//   bevelThickness = 0.02,
//   bevelSize = 0.02,
//   bevelOffset = 0,
//   bevelSegments = 1,
//   position = [0, 0, 0],
// }) => {
//   const matTexture = useTexture(texture);
//   return (
//     alphabet && (
//       <Text3D
//         font={fontFamily}
//         size={size}
//         height={height}
//         curveSegments={curveSegments}
//         bevelEnabled
//         bevelThickness={bevelThickness}
//         bevelSize={bevelSize}
//         bevelOffset={bevelOffset}
//         bevelSegments={bevelSegments}
//         position={position}
//       >
//         {alphabet}
//         <meshMatcapMaterial matcap={matTexture} />
//       </Text3D>
//     )
//   );
// };

export default Text;
