"use client";

import React, { useEffect } from "react";
import HeroSection from "@/app/Components/HeroSection/HeroSection";
import PixelBG from "@/app/Components/PixelBG/PixelBG";
import ProjectsGallery from "@/app/AnimComponents/ProjectsGallery/ProjectsGallery";
import Lenis from "lenis";
import ButtonAmin from "@/app/AnimComponents/ButtonAmin/ButtonAmin";
import HorizontalScroll from "@/app/Components/HorizontalScroll/HorizontalScroll";
import Link from "next/link";
import TechSection from "./Components/TechSection/TechSection";
import useSmoothScroll from "./Hooks/ScrollAnim/useScrollAnim";
import ZoomImageSection from "./Components/ZoomImageSection/ZoomImageSection";

const projects = [
      {
            title: "C2 Montreal",
            src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#000000",
            year: 2021,
            sector: "Development",
      },
      {
            title: "Office Studio",
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#8C8C8C",
            year: 2020,
            sector: "Development & Design",
      },
      {
            title: "Locomotive",
            src: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#EFE8D3",
            year: 2019,
            sector: "Development",
      },
      {
            title: "Silencio",
            src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            color: "#706D63",
            year: 2021,
            sector: "Design",
      },
];

const cards = [
      {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 1",
            id: 1,
            color: "#000000",
      },
      {
            url: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 2",
            id: 2,
            color: "#706D63",
      },
      {
            url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 3",
            id: 3,
            color: "#EFE8D3",
      },
      {
            url: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 4",
            id: 4,
            color: "#8C8C8C",
      },
      {
            url: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 5",
            id: 5,
            color: "#706D63",
      },
      {
            url: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 6",
            id: 6,
            color: "#EFE8D3",
      },
      {
            url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 7",
            id: 7,
            color: "#706D63",
      },
      {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 1",
            id: 1,
            color: "#000000",
      },
      {
            url: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 2",
            id: 2,
            color: "#706D63",
      },
      {
            url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 3",
            id: 3,
            color: "#EFE8D3",
      },
      {
            url: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 4",
            id: 4,
            color: "#8C8C8C",
      },
      {
            url: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 5",
            id: 5,
            color: "#706D63",
      },
      {
            url: "https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=1387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 6",
            id: 6,
            color: "#EFE8D3",
      },
      {
            url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Title 7",
            id: 7,
            color: "#706D63",
      },
];

const Page = () => {
      useSmoothScroll();

      useEffect(() => {
            window.addEventListener("blur", () => {
                  document.title = " I'm so lonely! Please come back";
            });
            window.addEventListener("focus", () => {
                  document.title = "Esrak Fahim";
            });
      }, []);

      return (
            <div id="main" className=" bg-primary text-TextPrimary">
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
                        <ZoomImageSection />
                        <TechSection />
                        {/* <HorizontalScroll data={cards} /> */}
                  </div>
            </div>
      );
};

export default Page;
