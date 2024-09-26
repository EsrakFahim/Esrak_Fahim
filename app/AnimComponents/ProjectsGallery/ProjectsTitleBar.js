import React from "react";
import { motion } from "framer-motion";

const ProjectsTitleBar = ({ index, projects, setModal, fontMultiplier }) => {
      return (
            <motion.div
                  initial={{ opacity: 1, scale: 0.7, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="projectsCard"
                  onMouseEnter={() => setModal({ active: true, index: index })}
                  onMouseLeave={() => setModal({ active: false, index: index })}
            >
                  <div className="flex justify-between items-center">
                        <h2
                              style={{
                                    fontSize: `calc(clamp(2.25em, 5vw, 8em) * ${fontMultiplier})`,
                              }}
                        >
                              {projects.title}
                        </h2>
                        <p>
                              {projects?.projectRole === "Both"
                                    ? "Design & Development"
                                    : projects?.projectRole}
                        </p>
                  </div>
            </motion.div>
      );
};

export default ProjectsTitleBar;
