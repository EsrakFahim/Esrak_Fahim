"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import './ButtonAmin.scss'
import Magnet from "../Magnet/Magnet";

const ButtonAmin = ({ children, background = "#455ce9",rounded, ...attributes  }) => {
      const circle = useRef(null);
      let timeLine = useRef(null);
      let timeoutId = null;
      useEffect(()=>{
            timeLine.current = gsap.timeline({ paused: true });
            timeLine.current
            .to(circle.current, {
                  top:"-25%",
                  width:"150%",
                  duration:0.5,
                  ease:"power3.in"
            },"enter")
            .to(circle.current, {
                  top:"-150%",
                  width:"150%",
                  duration:0.5,
            },"exit");
      },[])

      const manageMouseEnter = () => {
            if(timeoutId) clearInterval(timeoutId);
            timeLine.current.tweenFromTo('enter','exit')
      }
      const manageMouseLeave = () => {
            timeoutId = setTimeout(()=>{
                  timeLine.current.play();
            },300)
      }

      return (
            <Magnet>
                  <div
                        className={`roundedButton ${rounded ? "roundedCircle" : "capsule"}`}
                        style={{ overflow: "hidden" }}
                        onMouseEnter={() => manageMouseEnter()}
                        onMouseLeave={() => manageMouseLeave()}
                        {...attributes}
                  >
                        {children}
                        <div
                              ref={circle}
                              style={{ background }}
                              className="circle"
                        />
                  </div>
            </Magnet>
      );
};

export default ButtonAmin;
