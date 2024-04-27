import React from "react";
import Icons from "../components/icons";
import { TypeAnimation } from "react-type-animation";

const projects = [
  {
    name: 'ArtisanConnect',
    description: 'MERN Application designed to bridge the gap between local artisans and enthusiasts of handmade, unique products, empowering local creators to showcase their products in order to not only support the growth of local economies, but to promote sustainable consumer practices',
    imageSrc: 'https://images.pexels.com/photos/5709271/pexels-photo-5709271.jpeg',
    href: 'https://artisanconnect-8fe5.onrender.com/',
    repoHref: 'https://github.com/venecoderr/ArtisanConnect.git'
  },
    {
        name: 'CouchLock Movie Finder',
        description: 'Third Party API application that displays movies searches and store User preferences through Local Storage. BUILT with JavaScript and HTML only.',
        imageSrc: 'https://github.com/venecoderr/couchlock-movie-finder/blob/main/assets/img/bg-test2.jpg?raw=true',
        href: 'https://venecoderr.github.io/couchlock-movie-finder/',
        repoHref: 'https://github.com/venecoderr/couchlock-movie-finder.git'
        }
];

const practiceProjects = [
  {
    name: 'Weather Dashboard Application',
    description: 'Third Party API that forecasts information about weather conditions from each city the User searches for.',
    imageSrc: 'https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://maferadr.github.io/weather-dashboard/',
    repoHref: 'https://github.com/maferadr/weather-dashboard.git'
  },
  {
    name: 'Note Editor - PWA',
    description: 'Text Editor built as a Progressive Web Application allowing the user taking notes by working offline.',
    imageSrc: '/assets/text-editor.png',
    href: 'https://text-editor-pwa-jir8.onrender.com',
    repoHref: 'https://github.com/maferadr/Text-Editor-PWA.git'
  },
  {
    name: 'Password Generator',
    description: 'A JavaScript Application that allows the user to generate a random password meeting the criteria that the user desires.',
    imageSrc: '/assets/password-generator.png',
    href: 'https://maferadr.github.io/password-generator-Maria/',
    repoHref: 'https://github.com/maferadr/password-generator-Maria.git'
  },
  {
    name: 'Note Taker - Express JS.',
    description: 'This Node.JS application allows user to interact with it and make him able to take, save, update and delete notes.',
    imageSrc: '/assets/noteTaker.png',
    href: 'https://agile-waters-56527-455e40686738.herokuapp.com/',
    repoHref: 'https://github.com/maferadr/Note-Taker-ExpressJS.git'
  },
  {
    name: 'Multiple Choice Quiz',
    description: 'JavaScript Application Game that allows the user to interact for either correct or incorrect answers under boolean conditionals.',
    imageSrc: 'https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://maferadr.github.io/multiple-choiceQuiz/',
    repoHref: 'https://github.com/maferadr/multiple-choiceQuiz.git'
  }
]

export default function Portfolio(){
    return(
        <>
    <div>
        <div className="absolute portfolio-display bg-amber-50">
        <Icons/>
        <div className="mx-auto max-w-7xl px-14">
        <div className=" mx-auto max-w-2xl py-10 sm:py-20 lg:max-w-none lg:py-25">
          <div className="flex justify-between">
            <h2 className="portfolio">CRAFTING
            <span className="good"> SOME</span> ART</h2>
            <img id="memoji" className="fixed object object-right-bottom bottom-0 transform rotate-30" src="/assets/memoji.png"></img>
          </div>
          <p className="portfolio-main">  
          <br></br>
          <TypeAnimation
                            sequence={['Designing for people is what makes', 500, 'Designing for people is what makes me Happy!', 500]}
                            repeat={1}
                            speed={15}
                            />
          </p>
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
              {projects.map((project)=>(
                <div className="col-span-2 py-2" key={project.name}>
                   <div>
                <img src={project.imageSrc} className="lg-img-project object-cover rounded"></img>
              </div>
                            
              <h3 className="project-name mt-6 text-sm text-gray-500">
                <a href={project.href}>{project.name}</a>
              </h3>
              <p className="text-portfolio">{project.description}</p>
              <p id="repo-link" className="flex pt-1 text-portfolio text-sm justify-center"><a href={project.repoHref}>Check my Repo!</a></p>
                </div>
            ))}
      
            {/* Third project */}
                {practiceProjects.map((practice) =>(
                <div className="pl-2 py-2" key={practice.name}>
                    <div>
                      <img src={practice.imageSrc} className="md-img-project object-cover object-center rounded"></img>
                    </div>
                    <h3 id="md-project-name" className="project-name mt-6 text-sm text-gray-500">
                      <a href={practice.href}>{practice.name}</a>
                    </h3>
                    <p className="text-portfolio md-project hidden">{practice.description}</p>
                    <p id="repo-link" className="flex pt-2 text-portfolio text-sm justify-center"><a href={practice.repoHref}>Check my Repo!</a></p>
                </div>
                ))}
          </div>
        </div>
      </div>

        </div>
    </div>
      
        </>
    )
};