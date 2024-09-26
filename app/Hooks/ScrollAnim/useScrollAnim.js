"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const useSmoothScroll = () => {
      useEffect(() => {
            const lenis = new Lenis({
                  duration: 1, // Adjust scroll duration
                  easing: (t) => t * (2 - t), // Scroll easing
                  smooth: true,
            });

            function raf(time) {
                  lenis.raf(time);
                  requestAnimationFrame(raf);
            }

            lenis.on("scroll", ({ scroll }) => {
                  const parallaxElements =
                        document.querySelectorAll("[data-parallax]");

                  // Loop through each parallax element and apply a translation based on the scroll value
                  parallaxElements.forEach((el) => {
                        const speed = el.getAttribute("data-speed");
                        el.style.transform = `translateY(${scroll * speed}px)`;
                  });
            });

            requestAnimationFrame(raf);

            return () => {
                  lenis.destroy();
            };
      }, []);
};

export default useSmoothScroll;
