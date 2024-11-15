import Link from "next/link"


export default function Contact() {
    return (
        <>
        
            <div id="contact">
                <h1 id="contact-heading" className="text-center">Let's Connect!</h1>
                <img id="about-left-circle" src="/about left circle.png" alt="" />
                <br /><br /><br /><br />
                <div id="accounts-div" className="flex justify-center items-center">

                    <Link href="https://www.linkedin.com/in/muhammad-mehmood-ahmed-bb119424a/">
                        <div id="account">
                            <img id="logo" src="/linkedin.png" alt="" />
                            <h1>Linkedin</h1>
                        </div>
                    </Link>

                    <Link href="https://github.com/mehmoodahmed2511">
                        <div id="account">
                            <img id="logo" src="/github.png" alt="" />
                            <h1>GitHub</h1>
                        </div>
                    </Link>

                    <div id="account">
                        <img id="logo" src="/phone.png" alt="" />
                        <h1>+92 318-2200629</h1>
                    </div>

                    <div id="account">
                        <img id="logo" src="/email.png" alt="" />
                        <h1>92mehmood313@gmail.com</h1>
                    </div>

                </div>
            </div>
        </>
    )
}