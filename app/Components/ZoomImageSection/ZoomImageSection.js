import React, { useEffect, useRef } from "react";
import "./ZoomImageSection.scss";
import ZoomImageAnim from "@/app/AnimComponents/ZoomImageAnim/ZoomImageAnim";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ZoomImageSection = () => {
      const targetRef = useRef(null);

      useEffect(() => {
            const body = targetRef.current;

            // Create a matchMedia object to target large screens only
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                  // Animation using GSAP and ScrollTrigger for large screens
                  gsap.to("#main", {
                        backgroundColor: "#181818",
                        scrollTrigger: {
                              trigger: body,
                              start: "top top",
                              end: "bottom center",
                              scrub: true,
                              // markers: true, // optional: add markers for debugging
                        },
                  });
            });

            // Clean up ScrollTrigger instances
            return () => {
                  ScrollTrigger.getAll().forEach((trigger) => {
                        trigger.kill();
                  });
                  mm.kill(); // Clean up matchMedia listeners
            };
      }, []);

      return (
            <div
                  ref={targetRef}
                  className="hidden lg:block w-screen py-20 my-32"
            >
                  <ZoomImageAnim />
            </div>
      );
};

export default ZoomImageSection;
