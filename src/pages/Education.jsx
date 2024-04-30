import React from "react";
import Icons from "../components/icons";

export default function Contact(){

    return(
        <>
          <div className="bg-amber-50">
          <Icons/>
            <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg" className="object-cover full zoom"></img>
            <img className="col-start-1 row-start-1 w-100 h-[80vh] object-cover scale-y-[-1] opacity-70 fixed" src="/assets/orange.png"></img>
            <div className="bg-amber-50">
                <h1 className="title-edu">EDUCATION & <span className="experience"> Experience</span></h1>
                <p className="text-description justify-center">Understanding that every field that you decide to become a professional at takes even more time than whichever degree you get,
                    is what demonstrates you how passionate you really feel at what you're doing. My short path in Coding has made me realized that
                    there's never enough to learn when you really fall in love with you career, because the deeper you go through, the more you discover
                    out of it.
                    <br></br>
                    Experience matters, but your passion does even more.
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