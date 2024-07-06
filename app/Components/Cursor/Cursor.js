"use client";
import { useEffect, useState, useRef } from "react";
import "./Cursor.scss";
import {
      motion,
      useMotionValue,
      useSpring,
      transform,
      animate,
} from "framer-motion";

export default function Cursor({ stickyElement }) {
      const [isHovered, setIsHovered] = useState(false);
      const cursor = useRef(null);

      const cursorSize = isHovered ? 60 : 15;

      const mouse = {
            x: useMotionValue(0),
            y: useMotionValue(0),
      };

      const scale = {
            x: useMotionValue(1),
            y: useMotionValue(1),
      };

      const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
      const smoothMouse = {
            x: useSpring(mouse.x, smoothOptions),
            y: useSpring(mouse.y, smoothOptions),
      };

      const manageMouseMove = (e) => {
            const { clientX, clientY } = e;

            if (stickyElement && stickyElement.current) {
                  const { left, top, height, width } =
                        stickyElement.current.getBoundingClientRect();
                  const center = { x: left + width / 2, y: top + height / 2 };

                  if (isHovered) {
                        const distance = {
                              x: clientX - center.x,
                              y: clientY - center.y,
                        };
                        const absDistance = Math.max(
                              Math.abs(distance.x),
                              Math.abs(distance.y)
                        );
                        const newScaleX = transform(
                              absDistance,
                              [0, height / 2],
                              [1, 1.3]
                        );
                        const newScaleY = transform(
                              absDistance,
                              [0, width / 2],
                              [1, 0.8]
                        );
                        scale.x.set(newScaleX);
                        scale.y.set(newScaleY);
                        mouse.x.set(
                              center.x - cursorSize / 2 + distance.x * 0.1
                        );
                        mouse.y.set(
                              center.y - cursorSize / 2 + distance.y * 0.1
                        );
                  } else {
                        mouse.x.set(clientX - cursorSize / 2);
                        mouse.y.set(clientY - cursorSize / 2);
                  }
            } else {
                  mouse.x.set(clientX - cursorSize / 2);
                  mouse.y.set(clientY - cursorSize / 2);
            }
      };

      const manageMouseOver = () => {
            setIsHovered(true);
      };

      const manageMouseLeave = () => {
            setIsHovered(false);
            animate(
                  cursor.current,
                  { scaleX: 1, scaleY: 1 },
                  { duration: 0.1, type: "spring" }
            );
      };

      useEffect(() => {
            const currentElement = stickyElement?.current;
            if (currentElement) {
                  currentElement.addEventListener(
                        "mouseenter",
                        manageMouseOver
                  );
                  currentElement.addEventListener(
                        "mouseleave",
                        manageMouseLeave
                  );
            }
            window.addEventListener("mousemove", manageMouseMove);
            return () => {
                  if (currentElement) {
                        currentElement.removeEventListener(
                              "mouseenter",
                              manageMouseOver
                        );
                        currentElement.removeEventListener(
                              "mouseleave",
                              manageMouseLeave
                        );
                  }
                  window.removeEventListener("mousemove", manageMouseMove);
            };
      }, [isHovered, stickyElement]);

      return (
            <div className="cursorContainer">
                  <motion.div
                        ref={cursor}
                        style={{
                              left: smoothMouse.x,
                              top: smoothMouse.y,
                              scaleX: scale.x,
                              scaleY: scale.y,
                              width: cursorSize,
                              height: cursorSize,
                        }}
                        className="mainCursor"
                  ></motion.div>
            </div>
      );
}
