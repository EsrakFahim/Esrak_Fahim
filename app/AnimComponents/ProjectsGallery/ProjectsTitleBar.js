import React from "react";


const ProjectsTitleBar = ({ index, projects, setModal ,fontMultiplier }) => {
      return (
            <div
                  className="projectsCard"
                  onMouseEnter={() => setModal({ active: true, index: index })}
                  onMouseLeave={() => setModal({ active: false, index: index })}
            >
                  <h2
                  style={
                        {
                              fontSize:`calc(clamp(2.25em, 5vw, 8em) * ${fontMultiplier})`,
                        }
                  }
                  >{projects.title}</h2>
                  <p>Design & Development</p>
            </div>
      );
};

export default ProjectsTitleBar;