"use client";

import React, { useEffect, useState } from "react";
import ProjectsGallery from "@/app/AnimComponents/ProjectsGallery/ProjectsGallery";
import ButtonAmin from "@/app/AnimComponents/ButtonAmin/ButtonAmin";
import { List, SquaresFour } from "@phosphor-icons/react";
import ProjectsGalleryCard from "../AnimComponents/ProjectsGalleryCard/ProjectsGalleryCard";
import { motion } from "framer-motion";
import gsap from "gsap";
import useSmoothScroll from "../Hooks/ScrollAnim/useScrollAnim";

const projects = [
      {
            title: "C2 Montreal",
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#000000",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Office Studio",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#8C8C8C",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Locomotive",
            src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#EFE8D3",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Silencio",
            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#706D63",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "C2 Montreal",
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#000000",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Office Studio",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#8C8C8C",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Locomotive",
            src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#EFE8D3",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Silencio",
            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#706D63",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "C2 Montreal",
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#000000",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Office Studio",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#8C8C8C",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Locomotive",
            src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#EFE8D3",
            year: "2016",
            type: "Development & Design",
      },
      {
            title: "Silencio",
            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#706D63",
            year: "2016",
            type: "Development & Design",
      },
];

const Page = () => {
      useSmoothScroll();
      const [isList, setIsList] = useState(true);

      useEffect(() => {
            const scrollOptions = {
                  top: 0,
                  behavior: "smooth",
            };
            window.scrollTo(scrollOptions);
      }, [isList]);

      const switchLayout = (listView) => {
            const tl = gsap.timeline();
            tl.to(".projects-container", { opacity: 0, duration: 0.5 })
                  .call(() => setIsList(listView))
                  .to(".projects-container", { opacity: 1, duration: 0.5 });
      };

      return (
            <div className="min-h-screen ">
                  <div
                        style={{
                              padding: "0px calc(clamp(2.5em, 8vw, 8em) * 1.7)",
                        }}
                        className=""
                  >
                        <h1 className="text-[4vw] ">
                              Projects of the Next Level on <br /> Which I Have
                              Worked
                        </h1>
                        <div className="flex justify-between items-center">
                              <div className="flex items-center gap-6 my-10">
                                    <ButtonAmin>
                                          <div className="flex items-end gap-1">
                                                <span>All</span>
                                                <span className="text-xs text-blue-400 ">
                                                      42
                                                </span>
                                          </div>
                                    </ButtonAmin>
                                    <ButtonAmin>
                                          <div className="flex items-end gap-1">
                                                <span>Design</span>
                                                <span className="text-xs text-blue-400 ">
                                                      11
                                                </span>
                                          </div>
                                    </ButtonAmin>
                                    <ButtonAmin>
                                          <div className="flex items-end gap-1">
                                                <span>Development</span>
                                                <span className="text-xs text-blue-400 ">
                                                      31
                                                </span>
                                          </div>
                                    </ButtonAmin>
                              </div>
                              <div className="flex items-center gap-6 my-10">
                                    <div onClick={() => switchLayout(true)}>
                                          <ButtonAmin rounded={true}>
                                                <span className="flex items-center justify-center">
                                                      <List size={32} />
                                                </span>
                                          </ButtonAmin>
                                    </div>
                                    <div onClick={() => switchLayout(false)}>
                                          <ButtonAmin rounded={true}>
                                                <span className="flex items-center justify-center">
                                                      <SquaresFour size={32} />
                                                </span>
                                          </ButtonAmin>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <motion.div
                        data-scroll-speed={0.1}
                        className="projects-container"
                  >
                        {isList ? (
                              <motion.div
                                    key="list-view"
                                    initial={{ opacity: 0, marginTop: 100 }}
                                    animate={{ opacity: 1, marginTop: 0 }}
                                    transition={{ duration: 0.5 }}
                              >
                                    <ProjectsGallery
                                          projects={projects}
                                          fontMultiplier={0.45}
                                    />
                              </motion.div>
                        ) : (
                              <motion.div
                                    key="card-view"
                                    initial={{ opacity: 0, marginTop: 100 }}
                                    animate={{ opacity: 1, marginTop: 0 }}
                                    transition={{ duration: 0.5 }}
                              >
                                    <ProjectsGalleryCard projects={projects} />
                              </motion.div>
                        )}
                  </motion.div>
            </div>
      );
};

export default Page;
