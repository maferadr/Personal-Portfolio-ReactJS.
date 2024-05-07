import React from "react";
import Icons from "../components/icons";
import { TypeAnimation } from "react-type-animation";

export default function Contact(){

    const majorEducation = [
        {
            id: 1,
            name: 'University of Central Florida',
            href: 'https://drive.google.com/file/d/1WQdHfngt24snd3VezLjLb6Py54NgNlzl/view?usp=sharing',
            imageSrc: '/assets/ucf.png',
            description: 'Six Month Intensive Coding Bootcamp with +200hrs of classes. Certified as a Full Stack Developer.'
        },
        {
            id: 2,
            name: 'CoderHouse - Web Development',
            href: 'https://drive.google.com/file/d/16QLQweMbsE9EOfxb60cVKznRpiakMDIA/view?usp=sharing',
            imageSrc: 'https://media.giphy.com/avatars/coder_house/e62G0PMEAuoU.png',
            description: 'Web Development Certificate focused on HTML5, CSS, SASS, BootStrap and more.'
        },
        {
            id: 3,
            name: 'CoderHouse - Javascript.',
            href: 'https://drive.google.com/file/d/1R7PMM89x0A7YtxQOaJvlvVFOO-ztMFht/view?usp=sharing',
            imageSrc: 'https://styles.redditmedia.com/t5_5blkvq/styles/communityIcon_t5ji6wuld2z71.jpg?format=pjpg&s=1672be49333cd14749784be8bbc3c968a033d8e0',
            description: 'Javascript Fundamentals Certificate focused on a 3months intensive program learning JavaScript from the scratch.'
        },
        {
            id: 4,
            name: 'Coderhouse - React JS',
            href: 'https://drive.google.com/file/d/1OYWHv5XxbIi3iCSS2tOq7j1scHfMJkQj/view?usp=sharing',
            imageSrc: 'https://mir-s3-cdn-cf.behance.net/user/276/403d16459831423.5dea877440464.png',
            description: 'React JS Certificate focused on a 3months intensive program leaded to learn React JS fundamentals based on an e-commerce final project.'
        }
    ]


    return(
        <>
          <div className="education-container bg-orange-100">
                <div className="flex justify-center pt-8">
                    <h1 className="edu-title">EDUCATION & 
                    <br></br>
                    <span className="edu-subtitle">Experience.</span></h1>
                </div>
          <img className="col-start-1 row-start-1 w-100 h-[80vh] object-cover scale-y-[-1] opacity-70 fixed" src="/assets/orange.png"></img>
        <div>
            <p className="text-description">
                "Experience matters, but your passion does even more."
                <br></br>
                My passion for coding has been constantly growing since I started it 3 years ago. Here's some of my Major Education and Courses Certificates,
                Always looking forward to keep on learning even more!
            </p>
        </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {majorEducation.map((education) => (
            <div key={education.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80 img-education">
                <img
                  src={education.imageSrc}
                  alt={education.imageAlt}
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between px-3">
                <div>
                  <h3 className="text-sm text-gray-700 title-description">
                    <a href={education.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {education.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 edu-description pb-5">{education.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div> 
        </>
    )
}