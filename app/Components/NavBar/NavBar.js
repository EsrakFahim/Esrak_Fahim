"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import "./Navbar.scss";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnet from "@/app/AnimComponents/Magnet/Magnet";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav/Nav";
import ButtonAmin from "@/app/AnimComponents/ButtonAmin/ButtonAmin";

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
      const button = useRef(null);
      const pathname = usePathname();

      useEffect(() => {
            if (isActive) {
                  setIsActive(false);
                  gsap.to(button.current, {
                        scale: 0,
                        duration: 0.25,
                        ease: "power1.out",
                  });
            }
      }, [pathname]);

      useLayoutEffect(() => {
            gsap.registerPlugin(ScrollTrigger);

            const scrollTriggerInstance = ScrollTrigger.create({
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
                        gsap.to(button.current, {
                              scale: 0,
                              duration: 0.25,
                              ease: "power1.out",
                        });
                        setIsActive(false); // Ensure the menu is hidden when scrolling back
                  },
            });

            // Add an event listener to hide the menu when scrolling up
            const onScroll = () => {
                  if (window.scrollY === 0) {
                        setIsActive(false);
                        gsap.to(button.current, {
                              scale: 0,
                              duration: 0.25,
                              ease: "power1.out",
                        });
                  }
            };

            window.addEventListener("scroll", onScroll);

            return () => {
                  window.removeEventListener("scroll", onScroll);
                  scrollTriggerInstance.kill();
            };
      }, []);

      const isHomePage = pathname === "/";

      return (
            <>
                  <div className="w-full absolute top-0 z-[99999]">
                        <div
                              className={`absolute flex z-10 top-0 ${
                                    isHomePage
                                          ? "text-TextPrimary"
                                          : "text-TextPrimary"
                              } mix-blend-difference py-9 lg:px-10 lg:justify-between items-center box-border w-full`}
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
                              <div className="nav hidden lg:flex items-center">
                                    {navItems.map((item, index) => (
                                          <Magnet key={index}>
                                                <div className="el flex-col relative z-10 p-4 cursor-pointer">
                                                      {item.href && (
                                                            <Link
                                                                  href={
                                                                        item.href
                                                                  }
                                                            >
                                                                  {item.name}
                                                            </Link>
                                                      )}
                                                      <div
                                                            className={`indicator ${
                                                                  isHomePage
                                                                        ? "bg-TextPrimary"
                                                                        : "bg-TextPrimary"
                                                            } `}
                                                      />
                                                </div>
                                          </Magnet>
                                    ))}
                              </div>
                              <div className="block lg:hidden ">
                                    <p
                                          onClick={() => {
                                                setIsActive(!isActive);
                                                gsap.to(button.current, {
                                                      scale: isActive ? 0 : 1,
                                                      duration: 0.25,
                                                      ease: "power1.out",
                                                });
                                          }}
                                          className="cursor-pointer flex items-center gap-2"
                                    >
                                          <span className="w-[8px] h-[8px]  bg-neutral-700 rounded-full" />
                                          Menu
                                    </p>
                              </div>
                        </div>
                        <div
                              ref={button}
                              className="headerBtnContainer hidden lg:block"
                        >
                              <ButtonAmin
                                    onClick={() => {
                                          setIsActive(!isActive);
                                          gsap.to(button.current, {
                                                scale: isActive ? 0 : 1,
                                                duration: 0.25,
                                                ease: "power1.out",
                                          });
                                    }}
                                    className="btn"
                              >
                                    <div
                                          className={`burger ${
                                                isActive ? "burgerActive" : ""
                                          }`}
                                    ></div>
                              </ButtonAmin>
                        </div>
                  </div>
                  <AnimatePresence mode="wait">
                        {isActive && <Nav navItems={navItems} />}
                  </AnimatePresence>
            </>
      );
};

export default NavBar;
