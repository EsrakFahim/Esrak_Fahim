import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const slide = {
      initial: { x: 80 },
      enter: (i) => ({
            x: 0,
            transition: {
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.05 * i,
            },
      }),
      exit: (i) => ({
            x: 80,
            transition: {
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.05 * i,
            },
      }),
};

const scale = {
      open: { scale: 1, transition: { duration: 0.3 } },
      closed: { scale: 0, transition: { duration: 0.4 } },
};

const NavLink = ({ data, selectIndicator, setSelectIndicator }) => {
      const { name, href, _i } = data;

      return (
            <motion.div
                  className="link"
                  onMouseEnter={() => setSelectIndicator(href)}
                  custom={_i}
                  variants={slide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
            >
                  <motion.div
                        variants={scale}
                        animate={selectIndicator ? "open" : "closed"}
                        className="indicator"
                  />
                  <Link href={href}>{name}</Link>
            </motion.div>
      );
};

export default NavLink;
