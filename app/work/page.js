"use client";

import React from "react";
import ProjectsGallery from "@/app/AnimComponents/ProjectsGallery/ProjectsGallery";
import ButtonAmin from "@/app/AnimComponents/ButtonAmin/ButtonAmin";

const projects = [
      {
            title: "C2 Montreal",

            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#000000",
      },

      {
            title: "Office Studio",

            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#8C8C8C",
      },

      {
            title: "Locomotive",

            src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#EFE8D3",
      },

      {
            title: "Silencio",

            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#706D63",
      },
      {
            title: "C2 Montreal",

            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#000000",
      },

      {
            title: "Office Studio",

            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#8C8C8C",
      },

      {
            title: "Locomotive",

            src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#EFE8D3",
      },

      {
            title: "Silencio",

            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#706D63",
      },
      {
            title: "C2 Montreal",

            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#000000",
      },

      {
            title: "Office Studio",

            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#8C8C8C",
      },

      {
            title: "Locomotive",

            src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#EFE8D3",
      },

      {
            title: "Silencio",

            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            color: "#706D63",
      },
];

const page = () => {
      return (
            <div className="min-h-screen mt-32">
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
                  </div>
                  <div>
                        <ProjectsGallery 
                        projects={projects}
                        fontMultiplier={0.45}
                        />
                  </div>
            </div>
      );
};

export default page;
