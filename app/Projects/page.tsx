import Link from "next/link"

export default function Projects() {
    return (
        <div id="projects"><br /><br /><br /><br /><br />
            <h1 id="projects-heading">Projects</h1>

            {/* PROJECT 4 ATM PROGRAM */}
            <div id="project-bg" >
                <div id="project">
                    <div id="title-div" className="bg-gradient-to-r from-violet-500 to-purple-400">
                        <h1 id="title">ATM Machine Program</h1>
                        <Link id="visit-btn" className="flex justify-center items-center" href="https://github.com/mehmoodahmed2511/ATM-machine-program.git">Visit</Link>
                    </div>
                    <div id="images-div">
                        <img id="project-image" src="/project4/41.png" alt="" />
                        <img id="project-image" src="/project4/42.png" alt="" />
                        <img id="project-image" src="/project4/43.png" alt="" />
                    </div>
                    <div id="detail" className="bg-purple-50">
                        <p id="point">This ATM Machine Program is created in TypeScript.</p><hr />
                        <p id="point">It performs three operations Check Balance, Deposit Amount, and Withdraw Amount.</p><hr />
                        <p id="point">First, you will be asked to set your pin and then you can choose an operation.</p><hr />
                        <p id="point">In the end of a task, you will be asked for another operation.</p>
                    </div>
                </div>
            </div>

            {/* PROJECT 3 BICCAS */}
            <div id="project-bg" >
                <div id="project">
                    <div id="title-div" className="bg-gradient-to-r from-emerald-500 to-emerald-300">
                        <h1 id="title">Biccas Website Front-end</h1>
                        <Link id="visit-btn" className="flex justify-center items-center" href="https://biccas-website-frontend-design.vercel.app/">Visit</Link>
                    </div>
                    <div id="images-div">
                        <img id="project-image" src="/project3/31.png" alt="" />
                        <img id="project-image" src="/project3/35.png" alt="" />
                        <img id="project-image" src="/project3/33.png" alt="" />
                    </div>
                    <div id="detail" className="bg-emerald-50">
                        <p id="point">A branding and planning content website frontend with Plan, Features, and Subscription section.</p><hr />
                        <p id="point">Built using CSS, and HTML.</p>
                    </div>
                </div>
            </div>

            {/* PROJECT 2 GOSHOP */}
            <div id="project-bg" >
                <div id="project">
                    <div id="title-div" className="bg-gradient-to-r from-orange-600 to-orange-400">
                        <h1 id="title">GoShop Website Frontend</h1>
                        <Link id="visit-btn" className="flex justify-center items-center" href="https://go-shop-website-design.vercel.app/">Visit</Link>
                    </div>
                    <div id="images-div">
                        <img id="project-image" src="/project2/21.png" alt="" />
                        <img id="project-image" src="/project2/22.png" alt="" />
                        <img id="project-image" src="/project2/24.png" alt="" />
                    </div>
                    <div id="detail" className="bg-orange-50">
                        <p id="point">An e-commerce website having Shop, Blog, ABout Us, and Contact section.</p><hr />
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
                    <div id="images-div">
                        <img id="project-image" src="/project1/11.png" alt="" />
                        <img id="project-image" src="/project1/12.png" alt="" />
                        <img id="project-image" src="/project1/13.png" alt="" />
                    </div>
                    <div id="detail" className="bg-red-50">
                        <p id="point">This is a single-page website frontend. It is built in Next.js</p><hr />
                        <p id="point">IT contain Navbar, Front Page, Recent Posts, Featured Work and Footer section on the frontend.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}