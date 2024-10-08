import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const TextSlider = ({ text, direction }) => {
      const firstText = useRef(null);
      const secondText = useRef(null);
      const slider = useRef(null);
      let xPercent = 0;

      useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            // Ensure the DOM is fully loaded before GSAP starts targeting elements
            if (slider.current && firstText.current && secondText.current) {
                  gsap.to(slider.current, {
                        scrollTrigger: {
                              trigger: document.documentElement,
                              scrub: 0.25,
                              start: 0,
                              end: window.innerHeight,
                              onUpdate: (e) =>
                                    (direction = e.direction * direction),
                        },
                        x: "-500px",
                  });

                  requestAnimationFrame(animate);
            }
      }, []);

      const animate = () => {
            if (xPercent < -100) {
                  xPercent = 0;
            } else if (xPercent > 0) {
                  xPercent = -100;
            }

            // Check if refs are not null before setting GSAP animations
            if (firstText.current && secondText.current) {
                  gsap.set(firstText.current, { xPercent: xPercent });
                  gsap.set(secondText.current, { xPercent: xPercent });
            }

            requestAnimationFrame(animate);
            xPercent += 0.05 * direction;
      };

      return (
            <div
                  ref={slider}
                  className="slider flex items-center w-fit whitespace-nowrap text-[25vmax] lg:text-[21vmax] font-black uppercase leading-[0.75]"
            >
                  <span ref={firstText}>{text}</span>
                  <span ref={secondText}>{text}</span>
            </div>
      );
};

export default TextSlider;
