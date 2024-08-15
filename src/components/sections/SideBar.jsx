import React, { useContext } from "react";

const SideBar = () => {
  return (
    <div
      className={`absolute flex flex-col right-0 h-full w-[55%] bg-white z-50`}
    >
      <a
        href={`/about`}
        className={`relative w-full text-left py-3 px-4 text-black border-b-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
      >
        About Us
      </a>
      <a
        href={`/brands`}
        className={`relative w-full text-left py-3 px-4 text-black border-b-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
      >
        Brands
      </a>
      <a
        href={`/partners`}
        className={`relative w-full text-left py-3 px-4 text-black border-b-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
      >
        Partners
      </a>
      <a
        href={`/press`}
        className={`relative w-full text-left py-3 px-4 text-black border-b-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
      >
        Press
      </a>
      <a
        href={`/blog`}
        className={`relative w-full text-left py-3 px-4 text-black border-b-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
      >
        Blog
      </a>
      <a
        href={`/contact`}
        className={`relative w-full text-left py-3 px-4 text-black border-b-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
      >
        Contact Us
      </a>
      <a
        href={`/career`}
        className={`relative w-full text-left py-3 px-4 text-black border-b-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
      >
        {`Careers (We're hiring)`}
      </a>
    </div>
  );
};

export default SideBar;
