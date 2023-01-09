import React from "react";
import { motion } from "framer-motion"

const Projects = () => {
  return (
    <div>
      <p className="text-clip text-normal font-[800]">PROJECTS</p>
      <h3 className="text-subhead mt-[20px] mb-[80px]">
        Bringing products to life <br /> across digital and print platforms.
      </h3>
      <div className="flex justify-around flex-wrap ">
        <div className="w-1/2 flex justify-center">
        <div className="bg-[#4A10C0] rounded-3xl p-12 flex justify-center items-center">
        <motion.img src="/assets/phone.svg"/>
        </div>
        </div>
        <div className="w-1/2"></div>
        <div className="w-full"></div>
        <div className="w-1/2"></div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Projects;
