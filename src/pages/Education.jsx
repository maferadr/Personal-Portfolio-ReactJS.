import React from "react";
import Icons from "../components/icons";
import { TypeAnimation } from "react-type-animation";
import Footer from "./Footer";
import Nav from "../components/Nav";

export default function Contact(){

    const majorEducation = [
        {
            id: 1,
            name: 'University of Central Florida',
            title: 'Full Stack Developer.',
            href: 'https://drive.google.com/file/d/1WQdHfngt24snd3VezLjLb6Py54NgNlzl/view?usp=sharing',
            imageSrc: '/assets/ucf.png',
            description: 'Six Month Intensive Coding Bootcamp with +200hrs of classes. Frontend and Backend Code focused on MERN Applications, Gitflow strategies.',
            date: 'October 2023 - April 2024.'
        },
        {
            id: 2,
            name: 'CoderHouse',
            title: 'Web Development.',
            href: 'https://drive.google.com/file/d/16QLQweMbsE9EOfxb60cVKznRpiakMDIA/view?usp=sharing',
            imageSrc: 'https://media.giphy.com/avatars/coder_house/e62G0PMEAuoU.png',
            description: 'Web Development Certificate focused on HTML5, CSS, SASS, BootStrap and more.',
            date: 'July 2021 - December 2021'
        },
        {
            id: 3,
            name: 'CoderHouse',
            title: 'Javascript.',
            href: 'https://drive.google.com/file/d/1R7PMM89x0A7YtxQOaJvlvVFOO-ztMFht/view?usp=sharing',
            imageSrc: 'https://styles.redditmedia.com/t5_5blkvq/styles/communityIcon_t5ji6wuld2z71.jpg?format=pjpg&s=1672be49333cd14749784be8bbc3c968a033d8e0',
            description: 'Javascript Fundamentals Certificate focused on a 3months intensive program learning JavaScript from the scratch.',
            date: 'October 2022 - January 2023'
        },
        {
            id: 4,
            name: 'Coderhouse',
            title: 'React JS',
            href: 'https://drive.google.com/file/d/1OYWHv5XxbIi3iCSS2tOq7j1scHfMJkQj/view?usp=sharing',
            imageSrc: 'https://http2.mlstatic.com/D_NQ_NP_613143-MLA72045477825_102023-O.webp',
            description: 'React JS Certificate focused on a 3months intensive program leaded to learn React JS fundamentals based on an e-commerce final project.',
            date: 'January 2023 - March 2023'
        },
    ]


    return(
        <>
          <div data-aos='fade-up-right' className="education-container bg-orange-50">
            <Icons />
                <div className="flex justify-center pt-8">
                    <h1 className="portfolio text-education">EDUCATION & 
                    <br></br>
                    <span className="ml-5">
                    <TypeAnimation
                            sequence={['EXPE', 500, 'EXPERIENCE.', 500]}
                            repeat={1}
                            speed={15}
                            />
                    </span></h1>
                </div>
          <div className="grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6 main-card-div pt-8">
          {majorEducation.map((education)=>(
          <div data-aos='zoom-in-up' data-aos-delay="100" className="grid portfolio-container mb-2" key={education.name}>
          <a href={education.href}>
            <img className="object-cover" src={education.imageSrc} id="lg-project"></img>
          </a>
          <h2 className="absolute title-education text-white">{education.title}</h2>
          <div className="px-3">
                <p className="flex justify-center text-sm text-education">{education.description}</p>
                <p className="flex justify-center text-sm opacity-70 text-education">{education.date}</p>
          </div>
          <div className="flex justify-center">
            <button className="bg-transparent rounded p-1 border">
              <a href={education.href} className="text-sm project-name text-education">
              {education.name}</a>
            </button>
          </div>
        </div>
          ))}
          </div>
          
          
        </div> 
        <Footer/>
        </>
    )
}