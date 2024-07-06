"use client"

import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.05;

const TextFlip = ({ text , href }) => {
      return (
            <motion.a
                  initial="initial"
                  whileHover="hovered"
                        className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"

                  style={{
                        lineHeight: 0.85,
                  }}
                  href={href || ''}
                  target="_blank"
            >
                  <div>
                        {text?.split("")?.map((l, index) => (
                              <motion.span
                                    variants={{
                                          initial: {
                                                y: 0,
                                          },
                                          hovered: {
                                                y: "-100%",
                                          },
                                    }}
                                    transition={{
                                          duration: DURATION,
                                          delay: index * STAGGER,
                                          ease: "easeInOut",
                                    }}
                                    className="inline-block"
                                    key={index}
                              >
                                    {l}
                              </motion.span>
                        ))}
                  </div>
                  <div className="absolute inset-0">
                        {text?.split("")?.map((l, index) => (
                              <motion.span
                                    variants={{
                                          initial: {
                                                y: "100%",
                                          },
                                          hovered: {
                                                y: 0,
                                          },
                                    }}
                                    transition={{
                                          duration: DURATION,
                                          delay: index * STAGGER,
                                          ease: "easeInOut",
                                    }}
                                    className="inline-block"
                                    key={index}
                              >
                                    {l}
                              </motion.span>
                        ))}
                  </div>
            </motion.a>
      );
};

export default TextFlip;