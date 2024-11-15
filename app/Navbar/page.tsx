"use client"
import { useState } from "react";
import Link from "next/link"
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <div>
            <div id="navbar" className="">
                <GiHamburgerMenu id="menu-button" style={{ fontSize: menuOpen ? '18' : '15'}} onClick={toggleMenu} height={60} />

                <div id="bg">
                    <Link id="link" href="LandingPage">Home</Link>
                    <Link id="link" href="Projects">Projects</Link>
                    <Link id="link" href="Skills">Skills</Link>
                    <Link id="link" href="About">About</Link>
                </div>
                <a id="resume-button" href="/Mehmood Ahmed Resume.pdf">My Resume</a>

            </div>

            < div id="menu" style={{ display: menuOpen ? 'block' : 'none' }}>
                <ul>
                    <li><Link href="LandingPage" onClick={closeMenu}>Home</Link></li>
                    <li><Link href="Projects" onClick={closeMenu}>Projects</Link></li>
                    <li><Link href="Skills" onClick={closeMenu}>Skills</Link></li>
                    <li><Link href="About" onClick={closeMenu}>About</Link></li>
                </ul>
            </div>

        </div>
    )
}
