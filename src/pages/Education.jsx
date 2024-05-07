import React from "react";
import Icons from "../components/icons";

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
            imageSrc: 'https://mir-s3-cdn-cf.behance.net/user/276/403d16459831423.5dea877440464.png',
            description: 'React JS Certificate focused on a 3months intensive program leaded to learn React JS fundamentals based on an e-commerce final project.',
            date: 'January 2023 - March 2023'
        },
        {
            id: 5,
            name: 'Harvard University - Edx Online.',
            title: 'Entrepreneurship in Emerging Economies.',
            href: 'https://drive.google.com/file/d/15m14mlKfcj4HfSvsQRtg5skaCrak8LEp/view?usp=sharing',
            imageSrc: 'https://www.pngitem.com/pimgs/m/17-172468_harvard-logo-harvard-university-logo-hd-png-download.png',
            description: 'Entrepreneurship and innovation tackling complex social problems in emerging economies.',
            date: 'July 2020 - November 2020.'
        }
    ]


    return(
        <>
          <div data-aos='fade-up-right' className="education-container bg-orange-100">
            <Icons/>
                <div className="flex justify-center pt-8">
                    <h1 className="portfolio">EDUCATION & 
                    <br></br>
                    <span className="good">EXPERIENCE.</span></h1>
                </div>
          <img className="col-start-1 row-start-1 w-100 h-[80vh] object-cover scale-y-[-1] opacity-70 fixed z-[-1]" src="/assets/orange.png"></img>
          <div className="grid grid-cols-1 gap-x-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-6 main-card-div pt-8">
          {majorEducation.map((education)=>(
            <div data-aos='zoom-in-up' class="max-w-sm rounded overflow-hidden shadow-lg card-container mb-2">
            <a href={education.href}>
            <img className="w-full img-edu object-cover" src={education.imageSrc}></img>
                </a>
            <div className="px-6 py-4">
                <a className="font-bold mb-2" href={education.href}>
                {education.name}
                </a>
                <div className="text-gray-900 opacity-70">{education.title}</div>
                <p className="text-gray-700 text-base">
                {education.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
                <span className="inline-block bg-transparent border rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 edu-date">{education.date}</span>
            </div>
            </div>
          ))}
          </div>
          
          
        </div> 
        </>
    )
}