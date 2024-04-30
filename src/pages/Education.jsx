import React from "react";
import Icons from "../components/icons";
import { TypeAnimation } from "react-type-animation";

export default function Contact(){

    return(
        <>
          <div>
          <Icons/>
            <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg" className="object-cover full zoom"></img>
            <img className="col-start-1 row-start-1 w-100 h-[80vh] object-cover scale-y-[-1] opacity-70 fixed z-[-1]" src="/assets/orange.png"></img>
            <div>
                <h1 className="title-edu">EDUCATION & <span className="experience"> 
                <TypeAnimation
                            sequence={['Expe', 500, 'Experience.', 500]}
                            repeat={1}
                            speed={15}
                            /></span></h1>
                <p id="education-text" className="text-description justify-center">My short path in this field reduces my perspective about <strong>LIFE </strong>in just one thing
                    <br></br>
                    "Experience matters, but your passion for success does even more."
                    <br></br>
                    The meaning of <strong>Success</strong> can emphasize in numerous ways, being completely subjective in what would be the Scope Limit to reach it out;
                    for me, that's the most interest part about Sucess: There's no Scope Limit to reach it out, because the higher you go, the lighter the path is going to look like.
                    Success would just reduce to that for me, the fact of keep on growing and keep on learning from that. The fact of not giving up.
                </p>
            </div>
            <div className="education-container pb-5">
                    <div className="px-5">
                    <img className="ucf-logo object-cover" src="/assets/ucf-logo.png"></img>
                    <h1 className="title-edu">Major Education</h1>
                    <p className="text-sub">University of Central Florida.</p>
                    <ul className="edu-text">
                        <li>Six-month Intensive Coding Bootcamp with +200hrs of classes.</li>
                        <li>FrontEnd and BackEnd Code.</li>
                        <li>MERN Applications Development.</li>
                        <li>Gitflow group Strategies.</li>
                    </ul>
                    </div>
                </div>
            <div className="certificate-container pb-5">
                    <div className="px-5">
                        <h1 id="certificate-title" className="title-edu">Certificates</h1>
                        <p className="text-sub flex justify-center">Coderhouse - Online Courses.</p>
                        <ul className="edu-text">
                            <li>FrontEnd Developer Package Certificate with +5months of career.</li>
                            <li>Web Development Certificate.</li>
                            <li>JavaScript Basics Ceritificate.</li>
                            <li>React JS Certificate.</li>
                        </ul>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            <a href="https://www.coderhouse.com/ar/online/desarrollo-web-online">
                                <img className="img-certificate" src="/assets/webDevelopment.png"></img>
                            </a>
                            <a href="https://www.coderhouse.com/ar/online/javascript">
                                <img className="img-certificate" src="/assets/Javascript.png"></img>
                            </a>
                            <a href="https://www.coderhouse.com/ar/online/reactjs">
                            <img className="img-certificate" src="/assets/ReactJS.png"></img>
                            </a>
                        </div>
                    </div>
                </div>
        </div>  
        </>
    )
}