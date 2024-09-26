import React, { forwardRef, useEffect} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const SkyborgTyping = forwardRef(( props , ref) => {
  const group = ref;
  const { nodes, materials, animations } = useGLTF("/skyborgTyping.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions["typing"].play();
  }, [props,actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[0, 0.672, 0.624]}
          rotation={[-Math.PI / 2, 0, -3.056]}
          scale={[2.706, 2.706, 1]}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Cube001_22"
                position={[-0.072, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_68"
                  geometry={nodes.Object_68.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube007_28"
                position={[-0.01, 0, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_80"
                  geometry={nodes.Object_80.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube051_52"
                position={[-0.058, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_128"
                  geometry={nodes.Object_128.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube053_54"
                position={[-0.029, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_132"
                  geometry={nodes.Object_132.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube055_56"
                position={[-0.001, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_136"
                  geometry={nodes.Object_136.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube057_58"
                position={[0.028, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_140"
                  geometry={nodes.Object_140.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube062_63"
                position={[-0.039, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_150"
                  geometry={nodes.Object_150.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube064_65"
                position={[-0.01, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_154"
                  geometry={nodes.Object_154.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube071_72"
                position={[-0.049, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_168"
                  geometry={nodes.Object_168.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube073_74"
                position={[-0.02, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_172"
                  geometry={nodes.Object_172.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube002_23"
                position={[-0.067, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_70"
                  geometry={nodes.Object_70.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube003_24"
                position={[-0.095, 0.002, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_72"
                  geometry={nodes.Object_72.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube004_25"
                position={[-0.077, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_74"
                  geometry={nodes.Object_74.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube005_26"
                position={[-0.092, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_76"
                  geometry={nodes.Object_76.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube006_27"
                position={[-0.09, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_78"
                  geometry={nodes.Object_78.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube008_29"
                position={[-0.096, -0.001, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_82"
                  geometry={nodes.Object_82.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube009_30"
                position={[-0.08, -0.001, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_84"
                  geometry={nodes.Object_84.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube010_31"
                position={[-0.063, -0.001, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_86"
                  geometry={nodes.Object_86.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube011_32"
                position={[0.076, -0.001, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_88"
                  geometry={nodes.Object_88.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube012_33"
                position={[0.06, -0.001, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_90"
                  geometry={nodes.Object_90.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube013_34"
                position={[0.043, -0.001, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_92"
                  geometry={nodes.Object_92.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube014_35"
                position={[0.096, -0.001, 0.03]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_94"
                  geometry={nodes.Object_94.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube015_36"
                position={[0.097, 0.002, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_96"
                  geometry={nodes.Object_96.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube016_37"
                position={[0.094, 0.003, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_98"
                  geometry={nodes.Object_98.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube017_38"
                position={[0.093, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_100"
                  geometry={nodes.Object_100.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube018_39"
                position={[0.088, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_102"
                  geometry={nodes.Object_102.geometry}
                  material={materials["keycaps.011"]}
                />
              </group>
              <group
                name="Cube019_7"
                position={[-0.077, -0.006, -0.016]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube020_0"
                position={[-0.063, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_5"
                  geometry={nodes.Object_5.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube021_1"
                position={[-0.08, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube022_2"
                position={[-0.096, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube023_3"
                position={[-0.09, -0.007, 0.014]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube024_4"
                position={[-0.092, -0.007, -0.001]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube025_5"
                position={[-0.094, -0.006, -0.016]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube026_6"
                position={[-0.097, -0.005, -0.03]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube027_8"
                position={[-0.072, -0.007, -0.001]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube028_9"
                position={[-0.067, -0.007, 0.014]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_31"
                  geometry={nodes.Object_31.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube029_10"
                position={[-0.045, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_34"
                  geometry={nodes.Object_34.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_35"
                  geometry={nodes.Object_35.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube030_11"
                position={[0.024, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_37"
                  geometry={nodes.Object_37.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube031_12"
                position={[0.043, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_41"
                  geometry={nodes.Object_41.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube032_13"
                position={[0.06, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_43"
                  geometry={nodes.Object_43.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube033_14"
                position={[0.076, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_46"
                  geometry={nodes.Object_46.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_47"
                  geometry={nodes.Object_47.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube034_15"
                position={[0.096, -0.008, 0.029]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_49"
                  geometry={nodes.Object_49.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube035_16"
                position={[0.088, -0.007, 0.014]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_53"
                  geometry={nodes.Object_53.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube036_17"
                position={[0.093, -0.007, -0.001]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_55"
                  geometry={nodes.Object_55.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_56"
                  geometry={nodes.Object_56.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube037_18"
                position={[0.097, -0.006, -0.016]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_58"
                  geometry={nodes.Object_58.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_59"
                  geometry={nodes.Object_59.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube038_19"
                position={[0.095, -0.005, -0.03]}
                rotation={[-3.089, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_61"
                  geometry={nodes.Object_61.geometry}
                  material={materials["switch_bottom.008"]}
                />
                <mesh
                  name="Object_62"
                  geometry={nodes.Object_62.geometry}
                  material={materials["switch.010"]}
                />
              </group>
              <group
                name="Cube039_40"
                position={[-0.083, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_104"
                  geometry={nodes.Object_104.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube040_41"
                position={[-0.069, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_106"
                  geometry={nodes.Object_106.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube041_42"
                position={[-0.054, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_108"
                  geometry={nodes.Object_108.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube042_43"
                position={[-0.04, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_110"
                  geometry={nodes.Object_110.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube043_44"
                position={[-0.026, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_112"
                  geometry={nodes.Object_112.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube044_45"
                position={[-0.011, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_114"
                  geometry={nodes.Object_114.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube045_46"
                position={[0.003, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_116"
                  geometry={nodes.Object_116.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube046_47"
                position={[0.017, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_118"
                  geometry={nodes.Object_118.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube047_48"
                position={[0.031, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_120"
                  geometry={nodes.Object_120.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube048_49"
                position={[0.046, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_122"
                  geometry={nodes.Object_122.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube049_50"
                position={[0.06, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_124"
                  geometry={nodes.Object_124.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube050_51"
                position={[0.074, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_126"
                  geometry={nodes.Object_126.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube052_53"
                position={[-0.044, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_130"
                  geometry={nodes.Object_130.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube054_55"
                position={[-0.015, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_134"
                  geometry={nodes.Object_134.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube056_57"
                position={[0.014, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_138"
                  geometry={nodes.Object_138.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube058_59"
                position={[0.042, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_142"
                  geometry={nodes.Object_142.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube059_60"
                position={[0.056, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_144"
                  geometry={nodes.Object_144.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube060_61"
                position={[0.071, 0.001, 0]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_146"
                  geometry={nodes.Object_146.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube061_62"
                position={[-0.053, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_148"
                  geometry={nodes.Object_148.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube063_64"
                position={[-0.024, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_152"
                  geometry={nodes.Object_152.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube065_66"
                position={[0.004, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_156"
                  geometry={nodes.Object_156.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube066_67"
                position={[0.019, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_158"
                  geometry={nodes.Object_158.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube067_68"
                position={[0.033, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_160"
                  geometry={nodes.Object_160.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube068_69"
                position={[0.047, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_162"
                  geometry={nodes.Object_162.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube069_70"
                position={[0.061, 0, 0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_164"
                  geometry={nodes.Object_164.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube070_71"
                position={[-0.063, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_166"
                  geometry={nodes.Object_166.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube072_73"
                position={[-0.034, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_170"
                  geometry={nodes.Object_170.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube074_75"
                position={[-0.006, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_174"
                  geometry={nodes.Object_174.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube075_76"
                position={[0.009, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_176"
                  geometry={nodes.Object_176.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube076_77"
                position={[0.023, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_178"
                  geometry={nodes.Object_178.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube077_78"
                position={[0.037, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_180"
                  geometry={nodes.Object_180.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube078_79"
                position={[0.051, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_182"
                  geometry={nodes.Object_182.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube079_80"
                position={[0.066, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_184"
                  geometry={nodes.Object_184.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube080_81"
                position={[0.08, 0.001, -0.015]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_186"
                  geometry={nodes.Object_186.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group
                name="Cube_21"
                position={[-0.097, 0.002, -0.029]}
                rotation={[0.052, 0, 0]}
                scale={0.5}
              >
                <mesh
                  name="Object_66"
                  geometry={nodes.Object_66.geometry}
                  material={materials["switch_bottom.008"]}
                />
              </group>
              <group name="plate_20" position={[0.001, -0.013, -0.001]}>
                <mesh
                  name="Object_64"
                  geometry={nodes.Object_64.geometry}
                  material={materials.plate}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Alpha_Joints"
            geometry={nodes.Alpha_Joints.geometry}
            material={materials.Alpha_Joints_MAT}
            skeleton={nodes.Alpha_Joints.skeleton}
          />
          <skinnedMesh
            name="Alpha_Surface"
            geometry={nodes.Alpha_Surface.geometry}
            material={materials.Alpha_Body_MAT}
            skeleton={nodes.Alpha_Surface.skeleton}
          />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/skyborgTyping.glb");
export default SkyborgTyping;
