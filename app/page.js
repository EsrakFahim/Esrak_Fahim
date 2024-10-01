"use client";

import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Page = () => {
      useSmoothScroll();
      const [projects, setProjects] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            window.addEventListener("blur", () => {
                  document.title = " I'm so lonely! Please come back";
            });
            window.addEventListener("focus", () => {
                  document.title = "Esrak Fahim";
            });
      }, []);


      // Fetching data from the server with pagination
      useEffect(() => {
            const fetchData = async () => {
                  setLoading(true);
                  try {
                        const res = await axios.get(
                              `https://portfolio-backend-lime-seven.vercel.app/api/v1/project?category=all`
                        );
                        const responseData = res.data.data;

                        setProjects(responseData.projects.slice(0, 4));
                  } catch (error) {
                        console.error("Error fetching data:", error);
                  }
                  setLoading(false);
            };

            fetchData();
      }, []);

      return (
            <div id="main" className=" bg-primary text-TextPrimary">
                  <div>
                        <HeroSection />
                        <PixelBG />{" "}
                        {/* This is the pixel background only shows in large device */}
                        <div className="my-14">
                              {loading ? (
                                    <div>loading...</div>
                              ) : (
                                    <ProjectsGallery
                                          fontMultiplier={0.75}
                                          projects={projects}
                                    />
                              )}
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
