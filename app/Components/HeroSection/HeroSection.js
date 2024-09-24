"use client";

import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TextSlider from "@/app/AnimComponents/TextSlider/TextSlider";

const HeroSection = () => {
      return (
            <div className="h-screen bg-primary relative  flex overflow-hidden">
                  <div className="relative left-1/2 -translate-x-1/2  w-full h-full overflow-hidden hero-effect">
                        <div className="absolute flex flex-col gap-1 pointer-events-none ">
                              <div className="hidden lg:block">
                                    <TextSlider
                                          text="Innovative Solutions -"
                                          direction={-1}
                                    />
                                    <TextSlider
                                          text="Cutting-Edge Technology -"
                                          direction={1}
                                    />
                              </div>
                              <div className="flex lg:block items-end h-screen pb-28">
                                    <TextSlider
                                          text="Esrak Fahim -"
                                          direction={-1}
                                    />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default HeroSection;
