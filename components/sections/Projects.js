import React from "react";
import { motion } from "framer-motion";

const Projects = ({ noHead }) => {
  return (
    <div className="mb-[200px]">
      {noHead ? null : (
        <p className="text-clip text-normal font-[800]">PROJECTS</p>
      )}

      <h3 className="text-subhead mt-[20px] mb-[80px]">
        Bringing products to life <br /> across digital and print platforms.
      </h3>
      <div className="flex justify-around flex-wrap ">
        <div className="w-1/2 flex justify-center">
          <div className="bg-[#4A10C0] rounded-3xl p-12 flex justify-center items-center">
            <motion.img src="/assets/phone.svg" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex items-center h-full">
            <motion.img src="/assets/music.png" />
          </div>
        </div>
        <div className="w-full my-[126px] flex justify-center">
          <div className="w-full max-w-[1200px]">
            <motion.img src="/assets/comi.png" className="w-full" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="">
            <motion.img src="/assets/laptop.png" />
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div>
            <motion.img src="/assets/pencil.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
