"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function MonogramMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const nMeshRef = useRef<THREE.Mesh>(null);
  const cMeshRef = useRef<THREE.Mesh>(null);
  const accentPinRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle rotation and mouse tilt response
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      const mouseX = (state.pointer.x * Math.PI) / 8;
      const mouseY = (state.pointer.y * Math.PI) / 8;
      groupRef.current.rotation.y += (mouseX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mouseY - groupRef.current.rotation.x) * 0.05;
    }
  });

  // Create 3D Extruded geometry for Interlocking N and C
  const nShape = new THREE.Shape();
  // N Left vertical stem
  nShape.moveTo(-1.2, -1.5);
  nShape.lineTo(-0.7, -1.5);
  nShape.lineTo(-0.7, 1.5);
  nShape.lineTo(-1.2, 1.5);
  nShape.closePath();

  // N Diagonal slash
  nShape.moveTo(-0.7, 1.5);
  nShape.lineTo(-0.1, 1.5);
  nShape.lineTo(0.7, -1.5);
  nShape.lineTo(0.2, -1.5);
  nShape.closePath();

  // N Right vertical stem
  nShape.moveTo(0.7, -1.5);
  nShape.lineTo(1.2, -1.5);
  nShape.lineTo(1.2, 0.5);
  nShape.lineTo(0.7, 0.5);
  nShape.closePath();

  const cShape = new THREE.Shape();
  // C Outer sweep arc
  cShape.absarc(0, 0, 1.8, Math.PI * 0.25, Math.PI * 1.75, false);
  cShape.absarc(0, 0, 1.3, Math.PI * 1.75, Math.PI * 0.25, true);
  cShape.closePath();

  const extrudeSettings = {
    steps: 2,
    depth: 0.35,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.05,
    bevelSegments: 5,
  };

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* N Extruded Mesh with Dark Titanium Finish */}
      <mesh ref={nMeshRef} position={[0, 0, 0]}>
        <extrudeGeometry args={[nShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#151515"
          metalness={0.92}
          roughness={0.18}
          envMapIntensity={2.5}
        />
      </mesh>

      {/* C Extruded Mesh with Smoked Glass Transmission */}
      <mesh ref={cMeshRef} position={[0, 0, -0.1]}>
        <extrudeGeometry args={[cShape, extrudeSettings]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          thickness={0.5}
          chromaticAberration={0.06}
          anisotropy={0.2}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color="#FFD400"
          roughness={0.15}
          metalness={0.8}
        />
      </mesh>

      {/* Central Precision Yellow Laser Core */}
      <mesh ref={accentPinRef} position={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.08, 0.08, 0.8, 32]} />
        <meshStandardMaterial
          color="#FFD400"
          emissive="#FFD400"
          emissiveIntensity={2.0}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function NCMonogram3D() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.3} />
        
        {/* Cinematic Studio Lighting with Controlled Yellow Rim Light */}
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#444444" />
        <pointLight position={[2, 2, 3]} intensity={3.5} color="#FFD400" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#FFFFFF" />

        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <MonogramMesh />
        </Float>
      </Canvas>
    </div>
  );
}
