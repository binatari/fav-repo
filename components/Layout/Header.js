import Link from "next/link";
import React, { useState } from "react";
// import { DarkModeToggle } from "tailwind-darkmode-toggle";

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute md:hidden top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {" "}
        {/*logo container*/}
        <Link className="text-2xl block dark:hidden font-semibold" href="/">
            <img src="/assets/logo.svg" />
          </Link>
          <Link className="text-2xl hidden dark:block font-semibold" href="/">
            <img src="/assets/logo-whitw.png" />
          </Link>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-normal font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className="text-normal font-normal my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="filter  bg-white fixed w-full dark:bg-black">
      <nav className="flex container mx-auto   px-4 py-4 h-20 items-center">
        <MobileNav open={open} setOpen={setOpen} />
        <div className="w-3/12 flex items-center">
          <Link className="text-2xl block dark:hidden font-semibold" href="/">
            <img src="/assets/logo.svg" className="text-2xl block dark:hidden font-semibold" />
          </Link>
          <Link className="text-2xl hidden dark:block font-semibold" href="/">
            <img src="/assets/logo-whitw.png" className="text-2xl hidden dark:block font-semibold" />
          </Link>
        </div>
        <div className="w-9/12 flex justify-end items-center">
          <div
            className="z-50 flex gap-3 relative  md:hidden"
           
          >
            <div className="w-8 h-8 flex flex-col justify-between items-center"  onClick={() => {
              setOpen(!open);
            }}>
              <span
                className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-3.5" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                  open ? "w-0" : "w-full"
                }`}
              />
              <span
                className={`h-[2px] w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-3.5" : ""
                }`}
              />
            </div>
            {/* hamburger button */}

            {/* <div className="h-8 w-8 rounded-full bg-white p-2 moon-shadow">
              <DarkModeToggle className="max-h-[3rem] text-black" />
            </div> */}
          </div>

          <div className="hidden md:flex gap-4 text-small">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/etc">Etc.</NavLink>
            {/* <div className="h-8 w-8 rounded-full bg-white p-2 moon-shadow">
              <DarkModeToggle className="max-h-[3rem] h-full text-black dark:text-black" />
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
