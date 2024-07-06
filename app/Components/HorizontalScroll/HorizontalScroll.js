"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import Card from "./Card/Card";

const HorizontalScroll = ({ data }) => {
      const targetRef = useRef(null);
      const { scrollYProgress } = useScroll({ target: targetRef });

      const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

      return (
            <section
                  ref={targetRef}
                  className="relative my-14 h-[800px] bg-neutral-900"
            >
                  <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                        <motion.div
                              style={{ x }}
                              className="flex gap-4 items-center"
                        >
                              {data?.map((item, index) => {
                                    return <Card key={index} item={item} />;
                              })}
                        </motion.div>
                  </div>
            </section>
      );
};

export default HorizontalScroll;
