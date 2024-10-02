import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { slide, opacity, perspective } from "./anim";

export default function Inner({ children }) {
      const anim = (variants) => {
            return {
                  initial: "initial",
                  animate: "enter",
                  exit: "exit",
                  variants,
            };
      };
      return (
            <div className="inner">
                  <motion.div className="slide" {...anim(slide)} />
                  <motion.div className="page" {...anim(perspective)}>
                        <motion.div {...anim(opacity)}>{children}</motion.div>
                  </motion.div>
            </div>
      );
}
