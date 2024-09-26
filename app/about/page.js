"use client";

import React from "react";
import CurveLine from "../AnimComponents/CurveLine/CurveLine";
import ButtonAmin from "../AnimComponents/ButtonAmin/ButtonAmin";
import esrak from "../../public/Image/esrak.png";
import Image from "next/image";
import useSmoothScroll from "../Hooks/ScrollAnim/useScrollAnim";

const Page = () => {
      useSmoothScroll();

      return (
            <section
                  className="min-h-screen my-10 lg:my-32"
                  aria-label="About Md. Fatin Esrak Fahim"
            >
                  <div
                        style={{
                              padding: "0px calc(clamp(2.5em, 8vw, 8em) * 1.7)",
                        }}
                  >
                        <div>
                              <h1 className="text-[5.5vw]">
                                    Know More About Me
                              </h1>
                        </div>
                        <div className="relative my-5 h-[200px]">
                              <div className="absolute top-1/2 -translate-y-1/2 w-full">
                                    <CurveLine />
                              </div>
                              <div className="flex justify-end absolute top-1/2 -translate-y-1/2 right-48">
                                    <ButtonAmin
                                          rounded={true}
                                          width="200px"
                                          height="200px"
                                          buttonBg="white"
                                    >
                                          <span className="flex items-center justify-center text-3xl">
                                                About Me
                                          </span>
                                    </ButtonAmin>
                              </div>
                        </div>
                        <div className="flex items-start justify-between gap-16">
                              <div className="w-[60%] overflow-hidden">
                                    <Image
                                          data-parallax
                                          data-speed="-0.1" // Control the parallax speed
                                          src={esrak}
                                          alt="esrak"
                                          width={1500}
                                          height={1500}
                                          loading="lazy"
                                          placeholder="blur"
                                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                              </div>
                              <div className="w-[40%]">
                                    <p
                                          className="text-lg text-neutral-500 leading-[1.66] first-letter:capitalize"
                                          data-parallax
                                          data-speed="0.2" // Control the parallax speed
                                    >
                                          Hi, I’m Md. Fatin Esrak Fahim, a
                                          passionate web developer with 4 years
                                          of experience in building modern,
                                          responsive websites. I specialize in
                                          the MERN stack and enjoy bringing
                                          creative ideas to life through clean,
                                          efficient code. From front-end design
                                          to back-end development, I thrive on
                                          crafting user-friendly digital
                                          experiences. My journey in web
                                          development has allowed me to
                                          collaborate with diverse clients,
                                          helping them create impactful online
                                          solutions. I love what I do and am
                                          always looking for new challenges and
                                          opportunities to grow. Let’s connect
                                          and build something amazing together!
                                    </p>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default Page;
