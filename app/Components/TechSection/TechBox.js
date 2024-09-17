import React from "react";
import LinkBox from "./LinkBox";
import { FaHtml5, FaCss3, FaBootstrap, FaNodeJs ,FaGithub} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
      RiReactjsFill,
      RiNextjsFill,
      RiTailwindCssFill,
      RiFirebaseFill,
} from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";



const TechBox = () => {
      return (
            <div className="divide-y divide-neutral-300 border border-neutral-300">
                  <div className="grid grid-cols-3 divide-x divide-neutral-300">
                        <LinkBox Icon={FaHtml5} href="#" />
                        <LinkBox Icon={FaCss3} href="#" />
                        <LinkBox Icon={IoLogoJavascript} href="#" />
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-neutral-300">
                        <LinkBox Icon={RiTailwindCssFill} href="#" />
                        <LinkBox Icon={RiReactjsFill} href="#" />
                  </div>
                  <div className="grid grid-cols-4 divide-x divide-neutral-300">
                        <LinkBox Icon={SiExpress} href="#" />
                        <LinkBox Icon={BsFiletypeJson} href="#" />
                        <LinkBox Icon={FaGithub} href="#" />
                        <LinkBox Icon={RiFirebaseFill} href="#" />
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-neutral-300">
                        <LinkBox Icon={RiNextjsFill} href="#" />
                        <LinkBox Icon={FaNodeJs} href="#" />
                        <LinkBox Icon={DiMongodb} href="#" />
                  </div>
            </div>
      );
};

export default TechBox;
