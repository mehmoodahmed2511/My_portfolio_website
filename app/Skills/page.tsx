

export default function Skills() {
    return(
        <>
            {/* SKILLS */}
            <div id="skills">
            
                <h1 id="skills-heading">Skills</h1>
                <div id="skills-box" className="flex justify-center items-center flex-wrap gap-20">
                    {/* SKILL 1 */}
                    <div id="skill" className="flex flex-col justify-start items-center">
                        <img id="next-logo" src="/next.png" alt="" />
                        <div id="para">
                            <p>Enhancing my skills in <b>Next JS </b>
                                by building optimized,
                                modern web applications
                                with React, focusing on
                                performance and server-side rendering</p>
                        </div>
                    </div>

                    {/* SKILL 2 */}
                    <div id="skill" className="flex flex-col justify-start items-center">
                        <div id="logo-div">
                            <img id="react-logo" className="object-cover" src="/react.png" alt="" />
                        </div>
                        <div id="para">
                            <p>Building expertise in <b>ReactJS</b>,
                                focusing on creating
                                dynamic, interactive web
                                applications frontend with reusable
                                components and efficient
                                state management.</p>
                        </div>
                    </div>

                    {/* SKILL 3 */}
                    <div id="skill" className="flex flex-col justify-start items-center">
                        <div id="logo-div">
                            <img id="logo" className="object-cover" src="/sql.png" alt="" />
                        </div>
                        <div id="para">
                            <p>Proficient in <b>querying </b>
                                databases for efficient
                                data retrieval and
                                manipulation.
                                Experienced in writing
                                optimized queries for web
                                application integration</p>
                        </div>
                    </div>

                    {/* SKILL 4 */}
                    <div id="skill" className="flex flex-col justify-start items-center">
                        <div id="logo-div">
                            <img id="logo" className="object-cover" src="/tailwind.png" alt="" />
                        </div>
                        <div id="para">
                            <p>To improve design workflow
                                and save time, exploring
                                <b> Tailwind CSS</b> and leveraging
                                its utility-first framework to
                                build responsive and visually
                                appealing web interfaces.</p>
                        </div>
                    </div>

                    {/* SKILL 5 */}
                    <div id="skill" className="flex flex-col justify-start items-center">
                        <div id="logo-div">
                            <img id="logo" className="object-cover" src="/figma.png" alt="" />
                        </div>
                        <div id="para">
                            <p>Skilled in creating detailed UI
                                designs and interactive
                                prototypes with <b>Figma</b>,
                                focusing on delivering
                                intuitive and visually
                                compelling web interfaces</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}