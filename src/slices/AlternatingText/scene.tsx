"use client";

import { Environment } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "@/components/floating-can";
import { useMediaQuery } from "@/hooks/use-media-query";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Scene = () => {
  const canRef = useRef<Group>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const bgColors = ["#FFA6B5", "#E9CFF6", "#CBEF9A"];

  useGSAP(
    () => {
      if (!canRef.current) return;

      const sections = gsap.utils.toArray(".alternating-section");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-text-view",
          endTrigger: ".alternating-text-container",
          pin: true,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      sections.forEach((_, index) => {
        if (!canRef.current) return;
        if (index === 0) return;

        const isOdd = index % 2 !== 0;

        const xPosition = isDesktop ? (isOdd ? "-1" : "1") : 0;
        const yRotation = isDesktop ? (isOdd ? ".4" : "-.4") : 0;

        scrollTl
          .to(canRef.current.position, {
            x: xPosition,
            ease: "circ.inOut",
            delay: 0.5,
          })
          .to(
            canRef.current.position,
            {
              y: yRotation,
              ease: "back.inOut",
            },
            "<",
          )
          .to(".alternating-text-container", {
            backgroundColor: gsap.utils.wrap(bgColors, index),
          });
      });
    },
    { dependencies: [isDesktop] },
  );

  return (
    <group
      ref={canRef}
      position-x={isDesktop ? 1 : 0}
      rotation-y={isDesktop ? -0.3 : 0}
    >
      <FloatingCan flavor="strawberryLemonade" />
      <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default Scene;
