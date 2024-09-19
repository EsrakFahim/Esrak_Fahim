"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const useSmoothScroll = () => {
      useEffect(() => {
            const lenis = new Lenis({
                  duration: 1, // Adjust this value to control the scroll duration
                  easing: (t) => t * (2 - t), // Adjust the easing function to control the scroll easing
                  smooth: true, // Enable smooth scrolling
            });

            function raf(time) {
                  lenis.raf(time);
                  requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);

            return () => {
                  lenis.destroy(); // Clean up Lenis instance on component unmount
            };
      }, []);
};

export default useSmoothScroll;
