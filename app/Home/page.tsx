
import Navbar from "@/app/Navbar/page"
import Projects from "@/app/Projects/page"
import About from "@/app/About/page"
import Contact from "@/app/Contact/page"

export default function Home2() {
    return (
        <div>
            <div id="front-page">
                <img id="front-left-circle" src="/front left circle.png" alt="" />
                <img id="front-right-circle" src="/front right circle.png" alt="" />

                <div id="front-name-photo">
                    <h1 id="hello">Hello,<br /> 
                        <span id="welcome" className="text-4xl font-normal">Welcome to my Portfolio Website!</span><br />
                        <span id="name" className="text-teal-500">I am Mehmood Ahmed</span>
                    </h1>
                    <img id="profile" src="/profile.png" alt="" />
                </div>

                <div id="front-para"><p>A Front-end Web Developer,<br /> who aims to develop
                    <span className="font-bold text-gray-600"> Innovative </span>
                    and
                    <span className="font-bold text-gray-600"> Dynamic</span> Websites using Cutting-edge Tools.</p>
                </div>
                <img id="front-square" src="/front square.png"></img>
            </div>

        </div>
    )
}