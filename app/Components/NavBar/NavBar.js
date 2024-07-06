"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import "./Navbar.scss";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnet from "@/app/AnimComponents/Magnet/Magnet";

const navItems = [
      {
            name: "Work",
            href: "/work",
      },
      {
            name: "About",
            href: "/about",
      },
      {
            name: "Contact",
            href: "/contact",
      },
];

const NavBar = () => {
      const [isActive, setIsActive] = useState(false);
      const header = useRef(null);
      const button = useRef(null);
      const pathname = usePathname();

      useEffect(() => {
            if (isActive) setIsActive(false);
      }, [pathname]);

      useLayoutEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(button.current, {
                  scrollTrigger: {
                        trigger: document.documentElement,
                        start: 0,
                        end: window.innerHeight,
                        onLeave: () => {
                              gsap.to(button.current, {
                                    scale: 1,
                                    duration: 0.25,
                                    ease: "power1.out",
                              });
                        },
                        onEnterBack: () => {
                              gsap.to(
                                    button.current,
                                    {
                                          scale: 0,
                                          duration: 0.25,
                                          ease: "power1.out",
                                    },
                                    setIsActive(false)
                              );
                        },
                  },
            });
      }, []);

      const isHomePage = pathname === "/";

      return (
            <div className="w-full absolute top-0 z-[99999]">
                  <div
                        className={`absolute flex z-10 top-0 ${
                              isHomePage ? "text-white" : "text-black"
                        } mix-blend-difference p-9 justify-between items-center box-border w-full`}
                  >
                        <Magnet>
                              <Link
                                    href="/"
                                    className="logo flex cursor-pointer"
                              >
                                    <p className="copyRight">&copy;</p>
                                    <div className="name">
                                          <p>Develop By</p>
                                          <p>Esrak</p>
                                          <p>Fahim</p>
                                    </div>
                              </Link>
                        </Magnet>
                        <div className="nav flex items-center">
                              {navItems.map((item, index) => (
                                    <Magnet key={index}>
                                          <div className="el flex-col relative z-10 p-4 cursor-pointer">
                                                {item.href && (
                                                      <Link href={item.href}>
                                                            {item.name}
                                                      </Link>
                                                )}
                                                <div
                                                      className={`indicator ${
                                                            isHomePage
                                                                  ? "bg-white"
                                                                  : "bg-black"
                                                      } `}
                                                />
                                          </div>
                                    </Magnet>
                              ))}
                        </div>
                  </div>
                  <div ref={button} className="headerBtnContainer">
                        <Magnet>
                              <div
                                    onClick={() => setIsActive(!isActive)}
                                    className="btn"
                              >
                                    <div
                                          className={`burger ${
                                                isActive ? "burgerActive" : ""
                                          }`}
                                    />
                              </div>
                        </Magnet>
                  </div>
            </div>
      );
};

export default NavBar;
