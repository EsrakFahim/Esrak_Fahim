import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

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

const ProjectsModal = ({ modal, projects }) => {
      const { active, index } = modal;
      const modalContainer = useRef(null);
      const cursor = useRef(null);
      const cursorLabel = useRef(null);

      useEffect(() => {
            // Move container
            let xContainer = gsap.quickTo(modalContainer.current, "left", {
                  duration: 0.8,
                  ease: "power3",
            });
            let yContainer = gsap.quickTo(modalContainer.current, "top", {
                  duration: 0.8,
                  ease: "power3",
            });

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
                  xContainer(pageX);
                  yContainer(pageY);
                  xCursor(pageX);
                  yCursor(pageY);
                  xCursorLabel(pageX);
                  yCursorLabel(pageY);
            });

            return () => {
                  window.removeEventListener("mousemove", (e) => {
                        const { pageX, pageY } = e;
                        xContainer(pageX);
                        yContainer(pageY);
                        xCursor(pageX);
                        yCursor(pageY);
                        xCursorLabel(pageX);
                        yCursorLabel(pageY);
                  });
            };
      }, []);

      return (
            <>
                  <motion.div
                        ref={modalContainer}
                        variants={scaleAnim}
                        initial="initial"
                        animate={active ? "enter" : "closed"}
                        className="modalContainer hidden"
                  >
                        <div
                              style={{
                                    top: index * -100 + "%",
                              }}
                              className="modalSlider"
                        >
                              {projects?.map((project, idx) => {
                                    const { projectCoverImage, color, projectCoverImageAlt } = project;
                                    return (
                                          <div
                                                className="modal"
                                                style={{
                                                      backgroundColor: color,
                                                }}
                                                key={idx}
                                          >
                                                <Image
                                                      src={projectCoverImage}
                                                      alt={projectCoverImageAlt}
                                                      width={300}
                                                      height={300}
                                                />
                                          </div>
                                    );
                              })}
                        </div>
                  </motion.div>
                  <motion.div
                        ref={cursor}
                        className="cursor"
                        variants={scaleAnim}
                        initial="initial"
                        animate={active ? "enter" : "closed"}
                  />
                  <motion.div
                        ref={cursorLabel}
                        className="cursorLabel"
                        variants={scaleAnim}
                        initial="initial"
                        animate={active ? "enter" : "closed"}
                  >
                        View
                  </motion.div>
            </>
      );
};

export default ProjectsModal;
