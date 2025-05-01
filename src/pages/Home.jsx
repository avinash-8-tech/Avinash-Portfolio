import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import personImage from '/images/person.svg';
import gsap from 'gsap';

const Home = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const imageRef = useRef(null);
  const aviRef = useRef(null);
  const nashRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(nameRef.current, {
        opacity: 0,
        y: 1000,
        duration: 1.2,
        ease: 'power4.out',
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.9,
        delay: 0.3,
        ease: 'power4.out',
      });

      gsap.from(introRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.9,
        delay: 0.6,
        ease: 'power4.out',
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.6,
        ease: 'power4.out',
      });

      gsap.from([aviRef.current, nashRef.current], {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#fafafa] min-h-screen w-full px-6 sm:px-8 pt-24 md:pt-15 relative overflow-hidden">
      <div
        ref={aviRef}
        className="fixed bottom-4 right-6 text-8xl sm:text-[10rem] font-extrabold text-black/5 z-0 select-none pointer-events-none leading-none"
      >
        Avi
      </div>

      <div
        ref={nashRef}
        className="fixed top-4 left-6 text-8xl sm:text-[10rem] font-extrabold text-black/5 z-0 select-none pointer-events-none leading-none"
      >
        nash
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-100/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-12 min-h-[calc(100vh-8rem)]">
        <div className="text-center md:text-left max-w-2xl">
          <div className="relative inline-block">
            <p
              ref={nameRef}
              className="text-5xl sm:text-6xl font-bold text-[#111111] tracking-tight"
            >
              Avinash
            </p>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </div>
          <p
            ref={titleRef}
            className="text-xl sm:text-2xl font-semibold mt-3 text-[#111111] tracking-wide"
          >
            Full Stack Developer
          </p>

          <p
            ref={introRef}
            className="mt-4 sm:mt-6 text-sm sm:text-base text-[#333333] font-light leading-relaxed max-w-sm sm:max-w-md mx-auto md:mx-0"
          >
            I am a passionate and dedicated full-stack developer with hands-on experience in building responsive and dynamic web applications. I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js—and Tailwind CSS and modern JavaScript frameworks to create clean, efficient, and user-friendly interfaces. My focus is on delivering high-quality solutions that are both scalable and visually appealing. I enjoy turning ideas into real-world products and am constantly learning new tools and technologies to stay ahead in the development world.
          </p>

          <a
            href="mailto:abhaybehra8@gmail.com"
            className="inline-block mt-8 text-center px-12 py-4 bg-[#cccccc] text-[#111111] border-2 border-gradient-to-r from-blue-400 to-purple-500 rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-sm font-bold leading-5 hover:bg-[#333333] hover:text-[#fafafa] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200"
          >
            Get in touch
          </a>

          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-start mt-6 sm:mt-8">
            <Link
              to="/skills"
              className="inline-block text-center px-8 sm:px-12 py-3 sm:py-4 bg-[#fafafa] text-[#111111] border-2 border-gradient-to-r from-blue-400 to-purple-500 rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-xs sm:text-sm font-bold leading-5 hover:bg-[#cccccc] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200 min-w-[120px]"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className="inline-block text-center px-8 sm:px-12 py-3 sm:py-4 bg-[#fafafa] text-[#111111] border-2 border-gradient-to-r from-blue-400 to-purple-500 rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-xs sm:text-sm font-bold leading-5 hover:bg-[#cccccc] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200 min-w-[120px]"
            >
              Projects
            </Link>
            <Link
              to="/links"
              className="inline-block text-center px-8 sm:px-12 py-3 sm:py-4 bg-[#fafafa] text-[#111111] border-2 border-gradient-to-r from-blue-400 to-purple-500 rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-xs sm:text-sm font-bold leading-5 hover:bg-[#cccccc] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200 min-w-[120px]"
            >
              Links
            </Link>
          </div>
        </div>

        <div className="hidden md:flex justify-center items-center w-full md:w-[50%]">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-xl"></div>
            <img
              ref={imageRef}
              src={personImage}
              alt="Person illustration"
              className="relative w-full max-w-[450px] min-w-[380px] object-contain sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;