import React, { useEffect, useState } from "react";

const PixelBG = () => {
      const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
      });

      useEffect(() => {
            const handleResize = () => {
                  setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                  });
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
      }, []);

      const getBlocks = () => {
            const blockSize = windowSize.width * 0.05;
            const nbOfBlocks = Math.ceil(windowSize.height / blockSize);
            return Array.from({ length: nbOfBlocks }).map((_, i) => (
                  <div
                        onMouseEnter={(e) => colorize(e.target)}
                        key={i}
                        className="w-full h-[5vw] border "
                  ></div>
            ));
      };

      const colorize = (elm) => {
            elm.style.backgroundColor = "black";
            setTimeout(() => {
                  elm.style.backgroundColor = "transparent";
            }, 300);
      };

      return (
            <div className="relative flex h-screen items-center justify-center bg-white overflow-hidden pixelBG ">
                  <div className="text-[6vw] text-center font-extralight  w-[70%] z-10 pointer-events-none uppercase mix-blend-difference text-white">
                        <p>
                              We{" "}
                              <span className="font-semibold">specialize</span>{" "}
                              in turning space into{" "}
                              <span className="font-semibold">complex </span>
                              shapes
                        </p>
                  </div>
                  <div className="flex h-full w-full absolute top-0 left-0">
                        {windowSize.width > 0 &&
                              Array.from({ length: 20 }).map((_, i) => (
                                    <div
                                          key={i}
                                          className="w-[5vw] flex flex-col"
                                    >
                                          {getBlocks()}
                                    </div>
                              ))}
                  </div>
            </div>
      );
};

export default PixelBG;
