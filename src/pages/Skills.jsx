import React, { useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'devicon/devicon.min.css';
import gsap from 'gsap';
import LinkButtons from '../components/LinkButtons';

const Skills = () => {
  const nameRef = useRef(null);
  const containerRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: "devicon-javascript-plain colored", name: "JavaScript" },
        { icon: "devicon-python-plain colored", name: "Python" },
        { icon: "devicon-c-plain colored", name: "C" },
        { icon: "devicon-cplusplus-plain colored", name: "C++" },
      ],
      accent: "from-blue-400 to-blue-600"
    },
    {
      title: "Web Frontend",
      skills: [
        { icon: "devicon-html5-plain colored", name: "HTML" },
        { icon: "devicon-css3-plain colored", name: "CSS" },
        { icon: "devicon-javascript-plain colored", name: "JavaScript" },
        { icon: "devicon-react-original colored", name: "React" },
        { icon: "devicon-tailwindcss-plain colored", name: "Tailwind CSS" },
      ],
      accent: "from-purple-400 to-purple-600"
    },
    {
      title: "Web Backend",
      skills: [
        { icon: "devicon-nodejs-plain colored", name: "Node.js" },
        { icon: "devicon-express-original text-gray-800", name: "Express.js" },
        { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
        { icon: "fas fa-database text-[#800000]", name: "Mongoose" },
      ],
      accent: "from-green-400 to-green-600"
    },
    {
      title: "Other Tools",
      skills: [
        { icon: "devicon-git-plain colored", name: "Git" },
        { icon: "devicon-github-original text-gray-800", name: "GitHub" },
        { icon: "devicon-vscode-plain colored", name: "VS Code" },
      ],
      accent: "from-red-400 to-red-600"
    },
    {
      title: "Human Languages",
      skills: [
        { icon: "fas fa-language text-blue-700", name: "English" },
        { icon: "fas fa-language text-blue-700", name: "Hindi" },
      ],
      accent: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Useful Libraries",
      skills: [
        { icon: "fas fa-bolt text-green-600", name: "GSAP" },
        { icon: "fas fa-swimmer text-purple-600", name: "Swiper" },
        { icon: "fab fa-uikit text-pink-500", name: "Material UI" },
        { icon: "fas fa-stream text-blue-500", name: "Lenis" },
      ],
      accent: "from-pink-400 to-pink-600"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(nameRef.current, {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full px-4 py-12 sm:py-16 relative overflow-hidden">
      <div className="fixed bottom-4 right-6 text-8xl sm:text-[10rem] font-extrabold text-black/5 z-0 select-none pointer-events-none leading-none">
        Avi
      </div>
      <div className="fixed top-4 left-6 text-8xl sm:text-[10rem] font-extrabold text-black/5 z-0 select-none pointer-events-none leading-none">
        nash
      </div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <div className="flex justify-center mb-8 sm:mb-12">
          <LinkButtons />
        </div>

        <div className="mb-12 sm:mb-16">
          <h2
            ref={nameRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 relative inline-block"
          >
            My Skills
            <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Here's a comprehensive list of technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`relative bg-white border-3 border-gray-200 shadow-lg 
                         hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                         group overflow-hidden`}
            >
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${category.accent}`}></div>
              
              <div className="p-6 h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-5 pb-2 border-b border-gray-200 group-hover:text-gray-900 transition-colors">
                  {category.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <i className={`${skill.icon} text-2xl flex-shrink-0`}></i>
                      <span className="text-lg font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;