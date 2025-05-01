import React, { useEffect, useRef } from "react";
import LinkButtons from "../components/LinkButtons";
import gsap from "gsap";
import { chatapp, phunkweb, resbuild, skin, teslaWeb } from "../utils";

const mockProjects = [
  {
    id: 1,
    title: "Real Time Chat-App",
    description: "A real-time chat application enabling seamless communication with instant messaging and notifications.",
    image: chatapp,
    link: "https://github.com/avinash-8-tech/SyncTalk-FS"
  },
  {
    id: 2,
    title: "Phunk Website Redesign",
    description: "Redesigned Phunk website with a modern, responsive layout and improved user experience.",
    image: phunkweb,
    link: "https://github.com/avinash-8-tech/phunk-web-redesign"
  },
  {
    id: 3,
    title: "Resume Builder",
    description: "A dynamic resume builder allowing users to create, customize, and download resumes easily.",
    image: resbuild,
    link: "https://resume-genie-ten.vercel.app/"
  },
  {
    id: 4,
    title: "SKINNYDIPPED Clone",
    description: "A responsive Skinny Dipped website clone with smooth animations and modern interactive design.",
    image: skin,
    link: "https://github.com/avinash-8-tech/SKINNYDIPPED-WEBSITE"
  },
  {
    id: 5,
    title: "Tesla Website Redesign",
    description: "Redesigned Tesla website with sleek UI, smooth animations, and enhanced user interaction experience.",
    image: teslaWeb,
    link: "https://github.com/avinash-8-tech/Tesla-deploy"
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description: "A fullstack e-commerce platform with user authentication, product management, and secure payments integration.",
    image: "",
    link: ""
  },
];

const Projects = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      }
    );
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full px-4 sm:px-6 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8 sm:mb-10">
          <LinkButtons />
        </div>

        <div className="mb-12 sm:mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 text-left relative inline-block"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Here are some of my featured projects. Each one was built with care and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white border-3 border-[#cccccc] shadow-[5px_5px_0px_0px_rgba(204,204,204)] 
                         hover:shadow-[8px_8px_0px_0px_rgba(204,204,204)] transition-all duration-300
                         active:shadow-none active:translate-x-1 active:translate-y-1 group overflow-hidden"
            >
              <div className="h-48 overflow-hidden border-b-3 border-[#cccccc] relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">Coming Soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 font-sans text-sm uppercase tracking-wider 
                               border-3 border-[#cccccc] shadow-[3px_3px_0px_0px_rgba(204,204,204)] 
                               hover:shadow-[5px_5px_0px_0px_rgba(204,204,204)] hover:bg-gray-50 transition-all duration-200
                               active:shadow-none active:translate-x-1 active:translate-y-1"
                  >
                    View Project
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-block px-4 py-2 font-sans text-sm uppercase tracking-wider 
                               border-3 border-[#cccccc] shadow-[3px_3px_0px_0px_rgba(204,204,204)] 
                               cursor-not-allowed opacity-70"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="fixed bottom-4 right-6 text-8xl sm:text-[10rem] font-extrabold text-black/5 z-0 select-none pointer-events-none leading-none">
          Avi
        </div>
        <div className="fixed top-4 left-6 text-8xl sm:text-[10rem] font-extrabold text-black/5 z-0 select-none pointer-events-none leading-none">
          nash
        </div>
      </div>
    </div>
  );
};

export default Projects;