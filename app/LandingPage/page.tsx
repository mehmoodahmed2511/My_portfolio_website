"use client"
import { useState } from "react"
import Link from "next/link"
import Navbar from "@/app/Navbar/page"
import Projects from "@/app/Projects/page"
import About from "@/app/Skills/page"
import Contact from "@/app/Contact/page"

export default function LandingPage() {


    return (
        <div>
            <div id="front-page">

                <img id="front-left-circle" src="/front left circle.png" alt="" />
                <img id="front-right-circle" src="/front right circle.png" alt="" />

                <div id="front-name-photo">
                    <div id="front-name" className="flex flex-col justify-center items-start">
                        <h1 id="hello">Hello,</h1>
                        <h1 id="welcome" className="text-4xl font-normal">Welcome to my Portfolio Website!</h1>
                        <h1 id="name" className="text-teal-500">I am Mehmood Ahmed</h1>
                    </div>
                    <img id="profile" src="/profile.png" alt="" />
                </div>

                <div id="front-para"><p>I am a Front-end Web Developer,<br />    My aim is to develop
                    <span className="font-bold text-gray-600"> Innovative </span>
                    and
                    <span className="font-bold text-gray-600"> Dynamic</span> Websites using Cutting-edge Tools and transform the websites into realistic experiences.</p>

                    <div id="front-part2">
                        <h1 id="part2-heading">What I offer?</h1>

                        <div id="offer-bg">
                            <h1>Dynamic Websites</h1>
                            <img src="/web image.png" alt="" />
                        </div>
                        <p>If you are you looking for a business or personal website,</p>
                        <p>You are on the right place, <br />
                            Get good <b>quality</b> wesbites that make easy and more <b>people reach</b> to your <b>business</b> and <b>products</b>.</p>

                        <br /><br />

                        <div id="offer-bg">
                            <h1>Responsive Websites</h1>
                            <img src="/responsive image.png" alt="" />
                        </div>
                        <p>With <b>responsive</b> design, I assure you that your website looks and functions flawlessly across different screen sizes. My approach ensures optimal <b>performance</b>, delivering <b>fast</b> loading times and a <b>smooth</b> user experience on different device.</p>

                    </div>
                </div>
                <img id="front-square" src="/front square.png"></img>



            </div>

        </div >
    )
}