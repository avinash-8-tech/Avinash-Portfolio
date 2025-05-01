import React from 'react';
import { Link } from 'react-router-dom';

const LinkButtons = () => {
  return (
    <div className="mb-12 flex justify-center">
      <div className="flex gap-6 flex-wrap justify-center">
        <Link
          to="/"
          className="inline-block text-center px-12 py-4 bg-[#fafafa] text-[#111111] border-2 border-[#111111] rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-base font-bold leading-5 tracking-wide hover:bg-[#cccccc] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/skills"
          className="inline-block text-center px-12 py-4 bg-[#fafafa] text-[#111111] border-2 border-[#111111] rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-base font-bold leading-5 tracking-wide hover:bg-[#cccccc] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200"
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className="inline-block text-center px-12 py-4 bg-[#fafafa] text-[#111111] border-2 border-[#111111] rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-base font-bold leading-5 tracking-wide hover:bg-[#cccccc] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200"
        >
          Projects
        </Link>
        <Link
          to="/links"
          className="inline-block text-center px-12 py-4 bg-[#fafafa] text-[#111111] border-2 border-[#111111] rounded-sm shadow-[4px_4px_0_0_#ffffff,_4px_4px_0_1px_#000000] text-base font-bold leading-5 tracking-wide hover:bg-[#cccccc] hover:shadow-[4px_4px_0_0_#fafafa,_4px_4px_0_1px_#000000] hover:no-underline hover:scale-105 active:shadow-[2px_2px_0_0_#ffffff,_2px_2px_0_1px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:scale-100 transition duration-200"
        >
          Links
        </Link>
      </div>
    </div>
  );
};

export default LinkButtons;