import { Canvas } from "@react-three/fiber";
import {
  OrbitControls
} from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useState } from "react";

function Model({ opacityconstant, zoomLevel }) {
  const gltf = useGLTF("/me.glb");
  const [opacity, setOpacity] = useState(1);
  let vertices = [];

  function Points() {
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {
        vertices.push(...child.geometry.attributes.position.array);
      }
    });

    return (
      <points>
        <bufferGeometry attach={"geometry"}>
          <bufferAttribute
            attach={"attributes-position"}
            count={vertices.length / 3}
            array={new Float32Array(vertices)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach={"material"}
          size={0.001}
          sizeAttenuation={true}
          color={0xbbf7d0}
        />
      </points>
    );
  }

  window.addEventListener("scroll", () => {
    setOpacity(1 - window.scrollY * 0.001 * opacityconstant);
  });

  return (
    <div className="canvas h-[100%] w-full">
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 100, position: [0, 5, 0], zoom: zoomLevel }}
        style={{ width: `100%`, height: `100%`, position: "relative" }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={1.4}
          minPolarAngle={1.4}
          enableDamping={true}
        />
        <Points />
        <primitive
          object={gltf.scene}
          children-0-material-opacity={opacity}
          children-0-material-transparent={true}
        />
        <ambientLight intensity={2} />
      </Canvas>
    </div>
  );
}
useGLTF.preload("/me.glb");

export default Model;
