import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = ({ noHead, noTitle }) => {
  return (
    <div className="mb-[200px]">
      {noHead ? null : (
        <p className="text-clip text-normal font-[800]">PROJECTS</p>
      )}

      {noTitle ? null : (
        <h3 className="text-subhead mt-[20px] mb-[80px]">
          Bringing products to life <br /> across digital and print platforms.
        </h3>
      )}

      <div className="flex justify-around flex-wrap ">
        <div className="w-1/2 flex justify-center">
          <Link href={"/projects/subly"}>
            <div className="bg-[#4A10C0] mx-2 rounded-3xl p-12 flex justify-center items-center">
              <motion.img src="/assets/phone.svg" />
            </div>
            <p className="text-lg mt-5 font-semibold mx-2">
              Subscription tracking made easy with Sub.ly{" "}
              <span className="block text-sm text-[#777777]">
                Product design / 2022
              </span>
            </p>
          </Link>
        </div>
        <div className="w-1/2">
          <Link href={"/projects/collaborative-playlists"}>
            <div className="flex items-center flex-col justify-center mx-4 h-full">
              <motion.img src="/assets/music.png" />
              <p className="text-lg mt-5 font-semibold w-2/3 mx-2">
                Introducing collaborative playlists on Apple Music{" "}
                <span className="block text-sm text-[#777777]">
                  Product design / 2022
                </span>
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full my-[126px] flex flex-col items-center justify-center">
          <div className="w-full max-w-[1200px]">
            <motion.img src="/assets/comi.png" className="w-full" />
          </div>
          <p className="text-lg max-w-[1200px] w-full mt-5 font-semibold mx-2">
            Ticket Managing App: Improving the ticket managing experience for
            event organizers{" "}
            <span className="block text-sm text-[#777777]">
              Product design / 2022
            </span>
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <Link href={"/projects/creators-hub"}>
            <div className="mx-4">
              <motion.img src="/assets/laptop.png" />
            </div>
            <p className="text-lg mt-5 font-semibold mx-2">
              The Creators Hub{" "}
              <span className="block text-sm text-[#777777]">
                Product design / 2022
              </span>
            </p>
          </Link>
        </div>
        <div className="w-1/2 flex justify-center">
          <Link href={"/graphics"}>
            <div className="mx-4">
              <motion.img src="/assets/pencil.png" />
            </div>
            <p className="text-lg mt-5 font-semibold mx-2">
              Graphic & Brand Designs{" "}
              <span className="block text-sm text-[#777777]">
                Product design / 2022
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
