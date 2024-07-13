"use client";

import React from "react";
import TechBox from "./TechBox";
import { motion } from "framer-motion";

const TechSection = () => {
      return (
            <div  className=" px-4 py-12">
                  <h2
                        className="text-6xl font-semibold"
                        style={{
                              padding: "36px calc(clamp(2.5em, 8vw, 8em) * 1.5)",
                        }}
                  >
                        Tech I Know
                  </h2>
                  <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{
                              opacity: 1,
                              transition: { duration: 1.5 },
                        }}
                        className="tech-box-container"
                        style={{
                              padding: "0px calc(clamp(2.5em, 8vw, 8em) * 1.7)",
                        }}
                  >
                        <TechBox />
                  </motion.div>
            </div>
      );
};

export default TechSection;
