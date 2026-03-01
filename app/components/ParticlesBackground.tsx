"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#000000" },
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.5,
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
      }}
    />
  );
}