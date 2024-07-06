"use client"

import React, { useState } from "react";
import "./ProjectsGallery.scss";
import ProjectsModal from "./ProjectsModal";
import ProjectsTitleBar from "./ProjectsTitleBar";


const ProjectsGallery = ({projects,fontMultiplier}) => {
      const [modal, setModal] = useState({ active: false, index: 0 });
      console.log(modal)
      return (
            <div   className="flex min-h-screen items-center justify-center my-40">
                  <div className="w-[90%] flex flex-col items-center justify-center">
                        {projects?.map((projects, index) => (
                              <ProjectsTitleBar
                                    key={index}
                                    index={index}
                                    projects={projects}
                                    setModal={setModal}
                                    fontMultiplier={fontMultiplier}
                              />
                        ))}
                  </div>
                  <ProjectsModal modal={modal} projects={projects} />
            </div>
      );
};

export default ProjectsGallery;