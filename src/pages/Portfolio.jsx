import React from "react";
import Icons from "../components/icons";

export default function Portfolio(){

  const projects = [
    {
      name: 'Alefer - Proyectos e Ingenieria.',
      description: 'React JS, CSS & HTML5, JavaScript.',
      imageSrc: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
      href: 'https://alefer-ingenieria.netlify.app',
      repoHref: 'https://github.com/maferadr/Alefer-Engineering.git'
    },
    {
      name: 'ArtisanConnect',
      description: 'React JS, Express JS, Mongo DB, Node JS, JSON Webtoken.',
      imageSrc: 'https://images.pexels.com/photos/5709271/pexels-photo-5709271.jpeg',
      href: 'https://artisanconnect-8fe5.onrender.com/',
      repoHref: 'https://github.com/venecoderr/ArtisanConnect.git'
    },
      {
          name: 'CouchLock Movie Finder',
          description: 'HTML5, CSS & JavaScript.',
          imageSrc: 'https://github.com/venecoderr/couchlock-movie-finder/blob/main/assets/img/bg-test2.jpg?raw=true',
          href: 'https://venecoderr.github.io/couchlock-movie-finder/',
          repoHref: 'https://github.com/venecoderr/couchlock-movie-finder.git'
          },
          {
            name: 'Weather Dashboard Application',
            description: 'HTML5, CSS, JavaScript + Third Party API.',
            imageSrc: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            href: 'https://maferadr.github.io/weather-dashboard/',
            repoHref: 'https://github.com/maferadr/weather-dashboard.git'
          },
          {
            name: 'Multiple Choice Quiz',
            description: 'HTML5, CSS, JavaScript.',
            imageSrc: 'https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            href: 'https://maferadr.github.io/multiple-choiceQuiz/',
            repoHref: 'https://github.com/maferadr/multiple-choiceQuiz.git'
          },
          {
            name: 'Note Editor - PWA',
            description: 'Progressive Web Application - Node JS.',
            imageSrc: 'https://images.pexels.com/photos/19825347/pexels-photo-19825347/free-photo-of-madera-texto-cartas-letras.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            href: 'https://text-editor-pwa-jir8.onrender.com',
            repoHref: 'https://github.com/maferadr/Text-Editor-PWA.git'
          },
          {
            name: 'Password Generator',
            description: 'HTML5 & JavaScript',
            imageSrc: 'https://images.pexels.com/photos/18069157/pexels-photo-18069157/free-photo-of-abstracto-resumen-tecnologia-investigacion.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            href: 'https://maferadr.github.io/password-generator-Maria/',
            repoHref: 'https://github.com/maferadr/password-generator-Maria.git'
          },
          {
            name: 'Note Taker - Express JS.',
            description: 'Node JS & Express JS',
            imageSrc: 'https://images.pexels.com/photos/4210787/pexels-photo-4210787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            href: 'https://agile-waters-56527-455e40686738.herokuapp.com/',
            repoHref: 'https://github.com/maferadr/Note-Taker-ExpressJS.git'
          }
  ];
  

    return(
      <>
      <div className="pb-5 main-port-container" data-aos='fade-up-left'>
          <Icons/>
          <div className="flex justify-center pt-8">
            <h2 className="portfolio">
              CRAFTING <span className="good">SOME </span>ART
            </h2>
            <img className="col-start-1 row-start-1 w-100 h-[80vh] object-cover scale-y-[-1] opacity-70 fixed z-[-1]" src="/assets/blue-powder.png"></img>
          </div>
          <p className="portfolio-main top-0">Designing for people is what fulfills my Soul!</p>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" data-aos='fade-right' data-aos-onDurationChange='1000'>
              {projects.map((project)=>(
                <div className="grid portfolio-container" key={project.name}>
                <a href={project.href}>
                <div className="gradient-black"></div>
                  <img className="object-cover" src={project.imageSrc} id="lg-project"></img>
                </a>
                <p className="absolute text-white title-project">{project.name}</p>
                <p className="absolute text-white description-project">
                  <a href={project.repoHref} className="text-sm">
                  {project.description}</a>
                </p>
              </div>
              ))}
            </div>
        </div>
      </>
          )
};