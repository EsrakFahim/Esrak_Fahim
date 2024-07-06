"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./HorizontalScroll.scss";
import Image from "next/image";

function HorizontalScroll({ data }) {
      const sectionRef = useRef(null);
      const triggerRef = useRef(null);

      gsap.registerPlugin(ScrollTrigger);

      useEffect(() => {
            const pin = gsap.fromTo(
                  sectionRef.current,
                  {
                        translateX: 0,
                  },
                  {
                        translateX: "-350vw",
                        ease: "none",
                        duration: 1,
                        scrollTrigger: {
                              trigger: triggerRef.current,
                              start: "top top",
                              end: "2000 top",
                              scrub: 1,
                              pin: true,
                        },
                  }
            );
            return () => {
                  {
                        /* A return function for killing the animation on component unmount */
                  }
                  pin.kill();
            };
      }, []);

      return (
            <section className="scroll-section-outer">
                  {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

                  {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
                  <div ref={triggerRef}>
                        <div
                              ref={sectionRef}
                              className="scroll-section-inner py-10   "
                        >
                              {data?.map((item, index) => (
                                    <div
                                          key={index}
                                          style={
                                                {backgroundColor:`${item.color}`}
                                          }
                                          className="scroll-section  overflow-hidden px-8 py-10 "
                                    >
                                          <div className='relative overflow-hidden w-full h-full'>
                                          <div
                                                className="w-full h-full inset-0 z-0 transition-transform duration-300 hover:scale-110 "
                                                style={{
                                                      backgroundImage: `url(${item.url})`,
                                                      backgroundSize: "cover",
                                                      backgroundPosition:
                                                            "center",
                                                }}
                                          >
                                                {/* <div className='w-full h-full'>
                                                      <Image
                                                            src={item?.url}
                                                            alt={item?.title}
                                                            layout="responsive"
                                                            width={100} // provide numerical values
                                                            height={100} // provide numerical values, adjust as per aspect ratio
                                                      />
                                                </div> */}
                                          </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}

export default HorizontalScroll;
