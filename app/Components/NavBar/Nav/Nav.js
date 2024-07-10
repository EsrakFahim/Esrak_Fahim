import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import Curve from "./Curve";

const menuSlide = {
      initial: { x: "calc(100% + 100px)" },
      enter: {
            x: "0",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      },
      exit: {
            x: "calc(100% + 100px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      },
};

const Nav = ({ navItems }) => {
      const pathName = usePathname();
      const [selectIndicator, setSelectIndicator] = useState(pathName);
      return (
            <motion.div
                  variants={menuSlide}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="menu"
            >
                  <div className="body">
                        <div
                              onMouseLeave={() => setSelectIndicator(pathName)}
                              className="nav"
                        >
                              <div className="header">
                                    <p>Navigation</p>
                              </div>
                              {[{name:'Home',href:'/'},...navItems]?.map((item, _i) => {
                                    return (
                                          <NavLink
                                                key={_i}
                                                data={{ ...item, _i }}
                                                selectIndicator={
                                                      selectIndicator ==
                                                      item.href
                                                }
                                                setSelectIndicator={
                                                      setSelectIndicator
                                                }
                                          />
                                    );
                              })}
                        </div>
                  </div>
                  <Curve />
            </motion.div>
      );
};

export default Nav;
