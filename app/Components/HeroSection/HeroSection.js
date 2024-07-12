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
                        className="absolute flex flex-col gap-1 "
                  >
                        <TextSlider text="Innovative Solutions -" direction={-1} />
                        <TextSlider text="Cutting-Edge Technology -" direction={1} />
                        <TextSlider text="Fatin Esrak Fahim -" direction={-1} />
                  </div>
            </div>
      );
};

export default HeroSection;
