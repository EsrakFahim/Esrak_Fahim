"use client";

import React, { useEffect } from "react";
import HeroSection from "@/app/Components/HeroSection/HeroSection";
import PixelBG from "@/app/Components/PixelBG/PixelBG";
import ProjectsGallery from "@/app/AnimComponents/ProjectsGallery/ProjectsGallery";
import Lenis from "lenis";
import ButtonAmin from "@/app/AnimComponents/ButtonAmin/ButtonAmin";
import HorizontalScroll from "@/app/Components/HorizontalScroll/HorizontalScroll";
import Link from "next/link";

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
];

const cards = [
      {
        url: "/imgs/abstract/1.jpg",
        title: "Title 1",
        id: 1,
      },
      {
        url: "/imgs/abstract/2.jpg",
        title: "Title 2",
        id: 2,
      },
      {
        url: "/imgs/abstract/3.jpg",
        title: "Title 3",
        id: 3,
      },
      {
        url: "/imgs/abstract/4.jpg",
        title: "Title 4",
        id: 4,
      },
      {
        url: "/imgs/abstract/5.jpg",
        title: "Title 5",
        id: 5,
      },
      {
        url: "/imgs/abstract/6.jpg",
        title: "Title 6",
        id: 6,
      },
      {
        url: "/imgs/abstract/7.jpg",
        title: "Title 7",
        id: 7,
      },
    ];

const Page = () => {
      useEffect(() => {
            const lenis = new Lenis();

            function raf(time) {
                  lenis.raf(time);

                  requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
      }, []);

      useEffect(() => {
            window.addEventListener("blur", () => {
                  document.title = " I'm so lonely! Please come back";
            });
            window.addEventListener("focus", () => {
                  document.title = "Esrak Fahim";
            });
      }, []);

      return (
            <div>
                  <div>
                        <HeroSection />
                        <PixelBG />
                        <div className="my-14">
                              <ProjectsGallery
                                    projects={projects}
                                    fontMultiplier={0.75}
                              />
                              <div className="w-full flex justify-center items-center">
                                    <Link href="/work">
                                          <ButtonAmin>
                                                <span>See all projects</span>
                                          </ButtonAmin>
                                    </Link>
                              </div>
                        </div>
                        <HorizontalScroll data={cards} />
                  </div>
            </div>
      );
};

export default Page;
