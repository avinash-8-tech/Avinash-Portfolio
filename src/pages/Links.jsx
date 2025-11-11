import React from 'react';
import LinkButtons from '../components/LinkButtons';

const Links = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/avinash-behra-0baa34339/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      text: "LinkedIn",
      icon: "fab fa-linkedin-in",
      color: "bg-blue-100 text-blue-600",
      hover: "hover:bg-blue-50"
    },
    {
      href: "https://github.com/avinash-8-tech",
      text: "GitHub",
      icon: "fab fa-github",
      color: "bg-gray-100 text-gray-800",
      hover: "hover:bg-gray-50"
    },
    {
      href: "mailto:abhaybehra8@gmail.com",
      text: "Email Me",
      icon: "fas fa-envelope",
      color: "bg-red-100 text-red-600",
      hover: "hover:bg-red-50"
    },
    {
      href: "https://buymeacoffee.com/avinash08",
      text: "Buy Me A Coffee",
      icon: "fas fa-mug-hot",
      color: "bg-amber-100 text-amber-600",
      hover: "hover:bg-amber-50"
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full px-4 py-12 sm:py-16 overflow-hidden">
      <div className="fixed bottom-4 right-6 text-8xl sm:text-[10rem] font-extrabold text-black/3 z-0 select-none pointer-events-none leading-none tracking-tighter">
        Avi
      </div>
      <div className="fixed top-4 left-6 text-8xl sm:text-[10rem] font-extrabold text-black/3 z-0 select-none pointer-events-none leading-none tracking-tighter">
        nash
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex justify-center mb-12">
          <LinkButtons />
        </div>

        <div className="px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Connect With Me
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Let's collaborate, chat, or just say hello! Choose your preferred way to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group overflow-hidden transition-all duration-300 ${link.hover}`}
              >
                <div className={`flex items-center justify-between p-6 ${link.color} shadow-sm border border-gray-200`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${link.color.replace('text', 'bg').replace('600', '100')} bg-opacity-30`}>
                      <i className={`${link.icon} ${link.color.includes('text') ? link.color : 'text-current'} text-xl`}></i>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{link.text}</span>
                  </div>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-200">
                    <i className="fas fa-chevron-right text-gray-500"></i>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-xl pointer-events-none transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
              <p className="text-gray-600 font-medium">Looking forward to connecting with you!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
