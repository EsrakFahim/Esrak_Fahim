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

            // Animation using GSAP and ScrollTrigger
            gsap.to("#main", {
                  backgroundColor: "#181818",
                  scrollTrigger: {
                        trigger: body,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        markers: true, // optional: add markers for debugging
                  },
            });

            // Clean up ScrollTrigger instances
            return () => {
                  ScrollTrigger.getAll().forEach((trigger) => {
                        trigger.kill();
                  });
            };
      }, []);
      return (
            <div ref={targetRef} className="w-screen py-20 my-20">
                  <ZoomImageAnim />
            </div>
      );
};

export default ZoomImageSection;
