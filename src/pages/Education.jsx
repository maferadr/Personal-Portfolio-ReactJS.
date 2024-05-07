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
          
          {majorEducation.map((education)=>(
            <div data-aos='zoom-in-up' className="max-w-sm  lg:max-w-full lg:flex justify-center card-container">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <a href={education.href}>
                <img className="img-edu" src={education.imageSrc}></img>
                </a>
            </div>
            <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
            <a href={education.href}>
            <p className="text-sm text-gray-600 flex items-center">
                {education.name}
            </p>
            </a>
          <div className="text-gray-900 font-bold text-xl mb-2">{education.title}</div>
          <p className="text-gray-700 text-base">{education.description}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-600">{education.date}</p>
          </div>
        </div>
      </div>
        </div>
          ))}
          
        </div> 
        </>
    )
}