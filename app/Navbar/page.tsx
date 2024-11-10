import Link from "next/link"

export default function Navbar(){
    return(
        <div id="navbar">
            <div id="bg-1">
                <div id="bg-2">
                    <Link id="link" href="Home">Home</Link>
                    <Link id="link" href="Projects">Projects</Link>
                    <Link id="link" href="About">About</Link>
                    <Link id="link" href="">Contact</Link>
                </div>
            </div>
        </div>
    )
}