import React from "react";
import CurveLine from "../AnimComponents/CurveLine/CurveLine";
import ButtonAmin from "../AnimComponents/ButtonAmin/ButtonAmin";

const page = () => {
      return (
            <div className="min-h-screen ">
                  <div
                        style={{
                              padding: "0px calc(clamp(2.5em, 8vw, 8em) * 1.7)",
                        }}
                  >
                        <div className="">
                              <h1 className="text-[5.5vw] ">
                                    Know more about me
                              </h1>
                        </div>
                        <div className="relative my-5 h-[300px]  ">
                              <div className="absolute top-1/2 -translate-y-1/2 w-full">
                                    <CurveLine />
                              </div>
                              <div className="flex justify-end absolute top-1/2 -translate-y-1/2 right-48 ">
                                    <ButtonAmin
                                          rounded={true}
                                          width="200px"
                                          height="200px"
                                          buttonBg="white"
                                    >
                                          <span className="flex items-center justify-center text-3xl ">
                                                About Me
                                          </span>
                                    </ButtonAmin>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default page;
