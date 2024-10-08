"use client";

import React, { useEffect, useState } from "react";
import ProjectsGallery from "@/app/AnimComponents/ProjectsGallery/ProjectsGallery";
import ButtonAmin from "@/app/AnimComponents/ButtonAmin/ButtonAmin";
import { List, SquaresFour } from "@phosphor-icons/react";
import ProjectsGalleryCard from "../AnimComponents/ProjectsGalleryCard/ProjectsGalleryCard";
import { motion } from "framer-motion";
import gsap from "gsap";
import useSmoothScroll from "../Hooks/ScrollAnim/useScrollAnim";
import axios from "axios";

const Page = () => {
      useSmoothScroll();

      const [isList, setIsList] = useState(true);
      const [projects, setProjects] = useState([]);
      const [page, setPage] = useState(1);
      const [dataLoading, setDataLoading] = useState(false);
      const [loading, setLoading] = useState(false);
      const [hasMore, setHasMore] = useState(true); // Default is true for initial load
      const [projectCategory, setProjectCategory] = useState("all");

      // Scroll to top when layout switches
      useEffect(() => {
            window.scrollTo({
                  top: 0,
                  behavior: "smooth",
            });
      }, [isList]);

      const switchLayout = (listView) => {
            const tl = gsap.timeline();
            tl.to(".projects-container", { opacity: 0, duration: 0.5 })
                  .call(() => setIsList(listView))
                  .to(".projects-container", { opacity: 1, duration: 0.5 });
      };

      // Fetching data from the server with pagination
      useEffect(() => {
            const fetchData = async () => {
                  setDataLoading(true);
                  try {
                        const res = await axios.get(
                              `https://portfolio-backend-lime-seven.vercel.app/api/v1/project?category=${projectCategory}&page=${page}&limit=10`
                        );
                        const responseData = res.data.data;

                        setProjects((prevData) => [
                              ...prevData,
                              ...responseData.projects,
                        ]);
                        setHasMore(
                              page < Math.ceil(responseData.totalProjects / 10)
                        );
                  } catch (error) {
                        console.error("Error fetching data:", error);
                  }
                  setDataLoading(false);
            };

            fetchData();
      }, [page, projectCategory]);

      // Infinite Scroll Handler
      const handleScroll = () => {
            const scrollPosition =
                  window.innerHeight + document.documentElement.scrollTop;
            const maxScrollPosition =
                  document.documentElement.offsetHeight - 500;

            if (
                  scrollPosition >= maxScrollPosition &&
                  hasMore &&
                  !dataLoading
            ) {
                  setPage((prevPage) => prevPage + 1);
            }
      };

      useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
      }, [hasMore, dataLoading]);

      const handleProjectCategory = (category) => {
            setProjectCategory(category);
            setProjects([]);
            setPage(1);
      };

      return (
            <div className="relative mt-10 lg:my-32">
                  <div
                        style={{
                              padding: "0px calc(clamp(2.5em, 8vw, 8em) * 1.7)",
                        }}
                  >
                        <h1 className="text-[4vw]">
                              Projects of the Next Level on <br /> Which I Have
                              Worked
                        </h1>
                        <div className="flex justify-between items-center">
                              <div className="flex items-center gap-6 my-10">
                                    <ButtonAmin>
                                          <div
                                                onClick={() =>
                                                      handleProjectCategory(
                                                            "all"
                                                      )
                                                }
                                                className="flex items-end gap-1"
                                          >
                                                <span>All</span>
                                                <span className="text-xs text-blue-400">
                                                      42
                                                </span>
                                          </div>
                                    </ButtonAmin>
                                    <ButtonAmin>
                                          <div
                                                onClick={() =>
                                                      handleProjectCategory(
                                                            "Design"
                                                      )
                                                }
                                                className="flex items-end gap-1"
                                          >
                                                <span>Design</span>
                                                <span className="text-xs text-blue-400">
                                                      11
                                                </span>
                                          </div>
                                    </ButtonAmin>
                                    <ButtonAmin>
                                          <div
                                                onClick={() =>
                                                      handleProjectCategory(
                                                            "Development"
                                                      )
                                                }
                                                className="flex items-end gap-1"
                                          >
                                                <span>Development</span>
                                                <span className="text-xs text-blue-400">
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

                  {/* Projects Display */}
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

                  {/* Loading and No More Products */}
                  {dataLoading && (
                        <p className="w-full flex justify-center items-center ">
                              Wait a freaking second, It&apos;s loading....
                        </p>
                  )}

                  {!hasMore && !dataLoading && (
                        <p className="w-full flex justify-center items-center ">
                              No more shits to show
                        </p>
                  )}
            </div>
      );
};

export default Page;
