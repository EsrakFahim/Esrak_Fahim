"use client";

import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TextSlider from "@/app/AnimComponents/TextSlider/TextSlider";

const HeroSection = () => {
      
      return (
            <div className="h-screen bg-primary relative  flex overflow-hidden">
                  <div
                        className="absolute flex flex-col gap-0  "
                        // style={{
                        //       top: "calc(100vh - 350px)",
                        // }}
                  >
                        <TextSlider text="Web Developer -" direction={1} />
                        <TextSlider text="Web Developer -" direction={-1} />
                        <TextSlider text="Web Developer -" direction={1} />
                        {/* <TextSlider text="Web Developer -" direction={-1} />
                        <TextSlider text="Web Developer -" direction={1} /> */}
                  </div>
            </div>
      );
};

export default HeroSection;
