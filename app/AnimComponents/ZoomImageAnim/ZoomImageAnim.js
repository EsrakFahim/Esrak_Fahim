"use client";

import React, { useRef } from "react";
import img1 from "@/public/Image/1.jpeg";
import img2 from "@/public/Image/2.jpeg";
import img3 from "@/public/Image/3.jpg";
import img4 from "@/public/Image/4.jpg";
import img5 from "@/public/Image/5.jpg";
import img6 from "@/public/Image/6.jpg";
import img7 from "@/public/Image/7.jpeg";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const ZoomImageAnim = () => {
      const container = useRef(null);

      const { scrollYProgress } = useScroll({
            target: container,
            offset: ["start start", "end end"],
      });

      const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
      const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
      const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
      const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
      const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

      const picture = [
            {
                  id: 1,
                  img: img1,
                  scale: scale4,
            },
            {
                  id: 2,
                  img: img2,
                  scale: scale5,
            },
            {
                  id: 3,
                  img: img3,
                  scale: scale6,
            },
            {
                  id: 4,
                  img: img4,
                  scale: scale5,
            },
            {
                  id: 5,
                  img: img5,
                  scale: scale6,
            },
            {
                  id: 6,
                  img: img6,
                  scale: scale8,
            },
            {
                  id: 7,
                  img: img7,
                  scale: scale9,
            },
      ];
      return (
            <div ref={container} className="container">
                  <div className="sticky_div">
                        {picture?.map(({ id, img, scale }, index) => {
                              return (
                                    <motion.div
                                          key={id}
                                          style={{ scale }}
                                          className="el"
                                    >
                                          <div className="imageContainer">
                                                <Image
                                                      src={img}
                                                      alt={img}
                                                      fill
                                                      placeholder="blur"
                                                />
                                          </div>
                                    </motion.div>
                              );
                        })}
                  </div>
            </div>
      );
};

export default ZoomImageAnim;
