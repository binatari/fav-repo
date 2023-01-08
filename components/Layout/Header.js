import Link from 'next/link'
import React, { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
            <Link className="text-2xl font-semibold" href="/"><img src='/assets/logo.svg'/></Link>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-normal font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-normal font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}

export default function Header() {

    const [open, setOpen] = useState(false)
    return (
        <div className='filter  bg-white fixed w-full'>
        <nav className="flex container mx-auto   px-4 py-4 h-20 items-center">
         
            
      
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link className="text-2xl font-semibold" href="/"><img src='/assets/logo.svg'/></Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex text-small">
                    <NavLink to="/">
                     Home
                    </NavLink>
                    <NavLink to="/about">
                     About
                    </NavLink>
                    <NavLink to="/projects">
                     Projects
                    </NavLink>
                    <NavLink to="/etc">
                     Etc.
                    </NavLink>
                </div>
            </div>
        </nav>
        </div>
    )
}