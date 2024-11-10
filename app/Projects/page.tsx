import Link from "next/link"

export default function Projects() {
    return (
        <div id="projects"><br /><br /><br /><br /><br />
            <h1 id="projects-heading">PROJECTS</h1>

            {/* PROJECT 3 BICCAS */}
            <div id="project-bg" >
                <div id="project">
                    <div id="title-div" className="bg-gradient-to-r from-emerald-500 to-emerald-300">
                        <h1 id="title">Biccas Website Front-end</h1>
                        <Link id="visit-btn" className="flex justify-center items-center" href="https://biccas-website-frontend-design.vercel.app/">Visit</Link>
                    </div>
                    <div id="detail">
                        <div id="images-div">
                            <img id="project-image" src="/project3/31.png" alt="" />
                            <img id="project-image" src="/project3/35.png" alt="" />
                            <img id="project-image" src="/project3/33.png" alt="" />
                        </div>
                        <p id="point">A branding and planning content website frontend with Plan, Features, and Subscription section.</p>
                        <p id="point">Built using CSS, and HTML.</p>
                    </div>
                </div>
            </div>

            {/* PROJECT 2 GOSHOP */}
            <div id="project-bg" >
                <div id="project">
                    <div id="title-div" className="bg-gradient-to-r from-orange-600 to-orange-400">
                        <h1 id="title">GoShop E-commerce Website Frontend</h1>
                        <Link id="visit-btn" className="flex justify-center items-center" href="https://go-shop-website-design.vercel.app/">Visit</Link>
                    </div>
                    <div id="detail">
                        <div id="images-div">
                            <img id="project-image" src="/project2/21.png" alt="" />
                            <img id="project-image" src="/project2/22.png" alt="" />
                            <img id="project-image" src="/project2/24.png" alt="" />
                        </div>
                        <p id="point">An e-commerce website having Shop, Blog, ABout Us, and Contact section.</p>
                        <p id="point">Built using JavaScript, CSS, and HTML.</p>
                    </div>
                </div>
            </div>

            {/* PROJECT 1 JOHN WEBSITE */}
            <div id="project-bg" >
                <div id="project">
                    <div id="title-div" className="bg-gradient-to-r from-red-500 to-red-300">
                        <h1 id="title">Single Page Website Front-end</h1>
                        <Link id="visit-btn" className="flex justify-center items-center" href="https://single-page-website-frontend.vercel.app/">Visit</Link>
                    </div>
                    <div id="detail">
                        <div id="images-div">
                            <img id="project-image" src="/project1/11.png" alt="" />
                            <img id="project-image" src="/project1/12.png" alt="" />
                            <img id="project-image" src="/project1/13.png" alt="" />
                        </div>
                        <p id="point">This is a single-page website frontend. It is built in Next.js</p>
                        <p id="point">IT contain Navbar, Front Page, Recent Posts, Featured Work and Footer section on the frontend.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}