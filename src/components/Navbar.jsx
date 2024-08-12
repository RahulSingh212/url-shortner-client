import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className={`realtive w-full flex flex-col pb-3`}>
      <div className={`relative w-full flex justify-between`}>
        <div className={`relative flex flex-row my-auto w-[35%]`}>
          <a
            href={`/about`}
            className={`mr-10 navsection ${
              pathname.startsWith("/about") ? "underline text-yellow-500" : ""
            }`}
          >
            About Us
          </a>
          <a
            href={`/brands`}
            className={`mr-10 navsection ${
              pathname.startsWith("/brands") ? "underline text-yellow-500" : ""
            }`}
          >
            Brands
          </a>
          <a
            href={`/partners`}
            className={`mr-10 navsection ${
              pathname.startsWith("/partners")
                ? "underline text-yellow-500"
                : ""
            }`}
          >
            Partners
          </a>
          <a
            href={`/press`}
            className={`mr-10 navsection ${
              pathname.startsWith("/press") ? "underline text-yellow-500" : ""
            }`}
          >
            Press
          </a>
        </div>

        <a
          href={`/`}
          className={`relative flex flex-col space-y-[7.5px] cursor-pointer`}
        >
          <div className={`relative mx-auto`}>
            <img
              src="/images/ltv-icon.svg"
              alt="Logo"
              className={`rounded-b-full mx-auto  h-36 w-28 px-1 bg-white`}
            />
          </div>
          <span
            className={`text-[15px] font-extrabold`}
          >{`The Lifetime Value Co.`}</span>
        </a>

        <div className={`relative flex flex-row-reverse my-auto w-[35%]`}>
          <a
            href={`/career`}
            className={`ml-10 navsection my-auto flex align-middle items-center ${
              pathname.startsWith("/career") ? "underline text-yellow-500" : ""
            }`}
          >
            Careers{" "}
            <span
              className={`text-[9px] px-[5px] py-[2px] h-fit bg-white rounded-[5px] font-bold text-black my-auto ml-2`}
            >
              WE'RE HIRING
            </span>
          </a>
          <a
            href={`/contact`}
            className={`ml-10 navsection ${
              pathname.startsWith("/contact") ? "underline text-yellow-500" : ""
            }`}
          >
            Contact Us
          </a>
          <a
            href={`/blog`}
            className={`ml-10 navsection ${
              pathname.startsWith("/blog") ? "underline text-yellow-500" : ""
            }`}
          >
            Blog
          </a>
        </div>
      </div>
      <div className={`relative w-full flex flex-row justify-evenly py-4 my-4 bg-[#3b0764] rounded-lg`}>
        <a href={`/`} className={`font-mono font-bold text-lg`}>
          Add Url
        </a>
        <a href={`/top-100-urls`} className={`font-mono font-bold text-lg`}>
          Top 100 Urls
        </a>
        <a href={`/all-urls`} className={`font-mono font-bold text-lg`}>
          All Urls
        </a>
        <a href={`/search-urls`} className={`font-mono font-bold text-lg`}>
          Search Urls
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
