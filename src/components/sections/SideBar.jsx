import React, { useContext } from "react";
import { PageContext } from "../../context/PageContext";

const SideBar = () => {
  const { setSideBar } = useContext(PageContext);

  return (
    <div
      className={`absolute flex flex-col right-0 h-full w-[55%] bg-white z-50`}
    >
      <div
        className={`relative w-full flex flex-row-reverse p-1`}
        onClick={() => {
          setSideBar(false);
        }}
      >
        <img
          src={`/images/cross-icon.svg`}
          alt={`optoin`}
          className={`h-7 w-7 mr-1`}
        />
      </div>
      <a
        href={`/about`}
        className={`relative w-full text-left py-3 px-4 text-black border-y-[1px] border-gray-300 font-mono text-xs cursor-pointer hover:bg-gray-200`}
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
