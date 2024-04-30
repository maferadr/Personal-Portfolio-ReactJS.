import React from "react";
import Icons from "../components/icons";

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
        },
        {
          name: 'Weather Dashboard Application',
          description: 'Third Party API that forecasts information about weather conditions from each city the User searches for.',
          imageSrc: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          href: 'https://maferadr.github.io/weather-dashboard/',
          repoHref: 'https://github.com/maferadr/weather-dashboard.git'
        },
        {
          name: 'Multiple Choice Quiz',
          description: 'JavaScript Application Game that allows the user to interact for either correct or incorrect answers under boolean conditionals.',
          imageSrc: 'https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          href: 'https://maferadr.github.io/multiple-choiceQuiz/',
          repoHref: 'https://github.com/maferadr/multiple-choiceQuiz.git'
        }
];

const practiceProjects = [
  {
    name: 'Note Editor - PWA',
    description: 'Text Editor built as a Progressive Web Application allowing the user taking notes by working offline.',
    imageSrc: 'https://images.pexels.com/photos/19825347/pexels-photo-19825347/free-photo-of-madera-texto-cartas-letras.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://text-editor-pwa-jir8.onrender.com',
    repoHref: 'https://github.com/maferadr/Text-Editor-PWA.git'
  },
  {
    name: 'Password Generator',
    description: 'A JavaScript Application that allows the user to generate a random password meeting the criteria that the user desires.',
    imageSrc: 'https://images.pexels.com/photos/18069157/pexels-photo-18069157/free-photo-of-abstracto-resumen-tecnologia-investigacion.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://maferadr.github.io/password-generator-Maria/',
    repoHref: 'https://github.com/maferadr/password-generator-Maria.git'
  },
  {
    name: 'Note Taker - Express JS.',
    description: 'This Node.JS application allows user to interact with it and make him able to take, save, update and delete notes.',
    imageSrc: 'https://images.pexels.com/photos/4210787/pexels-photo-4210787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    href: 'https://agile-waters-56527-455e40686738.herokuapp.com/',
    repoHref: 'https://github.com/maferadr/Note-Taker-ExpressJS.git'
  }
]

export default function Portfolio(){
    return(
        <>
        <div className="bg-amber-50 absolute w-screen h-screen pb-5">
          <Icons/>
          <div className="flex justify-center pt-8">
            <h2 className="portfolio">
              CRAFTING <span className="good">SOME </span>ART
            </h2>
            <img id="bluePowder" className="fixed object-cover bottom-0" src="/assets/blue-powder.png"></img>
          </div>
          <p className="portfolio-main top-0">Designing for people is what fulfills my Soul!</p>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {projects.map((project)=>(
                <div className="grid portfolio-container" key={project.name}>
                <a href={project.href}>
                  <img className="object-cover" src={project.imageSrc} id="lg-project"></img>
                </a>
                <a href={project.repoHref}>
                  <p className="text-sm flex justify-center project-name">{project.name}</p>
                </a>
              </div>
              ))}
            </div>
            
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 extra-projects">
              {practiceProjects.map((practice)=>(
                <div key={practice.name} className=" portfolio-container">
                  <a href={practice.href}>
                    <img className="object-cover" src={practice.imageSrc} id="md-project"></img>
                  </a>
                  <a href={practice.repoHref}>
                  <p className="text-sm flex justify-center project-name">{practice.name}</p>
                </a>
                </div>
              ))}
            </div>
        </div>
      
        </>
    )
};