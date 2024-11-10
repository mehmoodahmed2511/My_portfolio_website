
import Navbar from "@/app/Navbar/page"
import Projects from "@/app/Projects/page"
import About from "@/app/About/page"
import Contact from "@/app/Contact/page"
import Home2 from "@/app/Home/page"

export default function Home() {
    return (
        <div>
            <Home2/>
            <hr />
            <Projects/>
            <hr />
            <About/>
           
            <Contact/>

        </div>
    )
}