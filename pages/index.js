import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <div className="">
      <div className=" justify-around min-h-screen flex-wrap flex items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-head ">
          <span className="text-clip"> I design digital products</span>
            <br />
            and experiences that are intuitive and enjoyable.
          </h1>
          <p className="text-normal text-black">
            Hi there! I’m Favour — a passionate product designer, available for
            full-time roles, contracts & freelance projects.
          </p>
        </div>
        <div className="w-full md:w-1/2 ">
        <img></img>
        </div>
       
      </div>
      <Services/>
      <Projects/>
    </div>
  );
}
