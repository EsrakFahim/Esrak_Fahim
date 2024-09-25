import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const scaleAnim = {
      initial: { scale: 0, x: "-50%", y: "-50%" },
      enter: {
            scale: 1,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
      },
      closed: {
            scale: 0,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
      },
};

const ProjectsGalleryCard = ({ projects }) => {
      const [modal, setModal] = useState({ active: false, index: 0 });
      const { active, index } = modal;
      const cursor = useRef(null);
      const cursorLabel = useRef(null);

      useEffect(() => {
            // Move cursor
            let xCursor = gsap.quickTo(cursor.current, "left", {
                  duration: 0.5,
                  ease: "power3",
            });
            let yCursor = gsap.quickTo(cursor.current, "top", {
                  duration: 0.5,
                  ease: "power3",
            });

            // Move cursor label
            let xCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
                  duration: 0.4,
                  ease: "power3",
            });
            let yCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
                  duration: 0.4,
                  ease: "power3",
            });

            window.addEventListener("mousemove", (e) => {
                  const { pageX, pageY } = e;
                  xCursor(pageX);
                  yCursor(pageY);
                  xCursorLabel(pageX);
                  yCursorLabel(pageY);
            });

            return () => {
                  window.removeEventListener("mousemove", (e) => {
                        const { pageX, pageY } = e;
                        xCursor(pageX);
                        yCursor(pageY);
                        xCursorLabel(pageX);
                        yCursorLabel(pageY);
                  });
            };
      }, []);

      return (
            <>
                  <div
                        className="grid lg:grid-cols-2 grid-cols-1 gap-10"
                        style={{
                              padding: "60px calc(clamp(2.5em, 8vw, 8em) *1.6)",
                        }}
                  >
                        {projects?.map((project, idx) => {
                              const { projectCoverImage, color, title,projectCoverImageAlt, year, type } = project;
                              return (
                                    <div
                                          key={idx}
                                          onMouseEnter={() =>
                                                setModal({
                                                      active: true,
                                                      index: index,
                                                })
                                          }
                                          onMouseLeave={() =>
                                                setModal({
                                                      active: false,
                                                      index: index,
                                                })
                                          }
                                          className="cursor-pointer "
                                    >
                                          <div
                                                className="py-24 px-10 "
                                                style={{
                                                      backgroundColor: color,
                                                }}
                                          >
                                                <Image
                                                      src={projectCoverImage}
                                                      alt={projectCoverImageAlt}
                                                      width={800}
                                                      height={800}
                                                      // placeholder='blur'
                                                />
                                          </div>
                                          <div className="flex flex-col gap-3 py-8">
                                                <h3 className="text-4xl font-normal">
                                                      {title}
                                                </h3>
                                                <div className="w-full h-[1px] bg-slate-300 my-1" />
                                                <div className="flex justify-between items-center">
                                                      <h5>{type}</h5>
                                                      <span>{year}</span>
                                                </div>
                                          </div>
                                    </div>
                              );
                        })}
                  </div>
                  <motion.div
                        ref={cursor}
                        className="w-28 h-28 rounded-full bg-blue-600 text-white absolute z-20 flex items-center justify-center text-sm font-light pointer-events-none"
                        variants={scaleAnim}
                        initial="initial"
                        animate={active ? "enter" : "closed"}
                  />
                  <motion.div
                        ref={cursorLabel}
                        className="w-28 h-28 rounded-full bg-transparent text-white absolute z-20 flex items-center justify-center text-sm font-light pointer-events-none"
                        variants={scaleAnim}
                        initial="initial"
                        animate={active ? "enter" : "closed"}
                  >
                        View
                  </motion.div>
            </>
      );
};

export default ProjectsGalleryCard;
