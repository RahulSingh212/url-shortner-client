import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { PageContext } from "../context/PageContext";
import SideBar from "./sections/SideBar";

const Navbar = () => {
  const { sideBar, setSideBar } = useContext(PageContext);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <nav className={`realtive flex flex-col pb-3 z-10 mx-auto w-[90%] md:w-[85%]`}>
        <div className={`relative w-full flex justify-between`}>
          <div className={`hidden relative lg:flex flex-row my-auto w-[35%]`}>
            <a
              href={`/about`}
              className={`mr-10 navsection text-center ${
                pathname.startsWith("/about") ? "underline text-yellow-500" : ""
              }`}
            >
              About Us
            </a>
            <a
              href={`/brands`}
              className={`mr-10 navsection text-center ${
                pathname.startsWith("/brands")
                  ? "underline text-yellow-500"
                  : ""
              }`}
            >
              Brands
            </a>
            <a
              href={`/partners`}
              className={`mr-10 navsection text-center ${
                pathname.startsWith("/partners")
                  ? "underline text-yellow-500"
                  : ""
              }`}
            >
              Partners
            </a>
            <a
              href={`/press`}
              className={`mr-10 navsection text-center ${
                pathname.startsWith("/press") ? "underline text-yellow-500" : ""
              }`}
            >
              Press
            </a>
          </div>

          <a
            href={`/`}
            className={`relative flex flex-col space-y-[10px] md:space-y-[7.5px] cursor-pointer mx-auto`}
          >
            <div className={`relative mx-auto`}>
              <img
                src="/images/ltv-icon.svg"
                alt="Logo"
                className={`rounded-b-full mx-auto h-24 w-20 md:h-36 md:w-28 px-1 bg-white`}
              />
            </div>
            <span
              className={`text-[12px] md:text-[15px] font-extrabold`}
            >{`The Lifetime Value Co.`}</span>
          </a>

          <div
            className={`lg:hidden flex absolute right-0 top-2`}
            onClick={() => {
              setSideBar(true);
            }}
          >
            <img
              src={`/images/hamburger-icon.svg`}
              alt={`optoin`}
              className={`p-[2px] h-6 w-6`}
            />
          </div>

          <div
            className={`hidden lg:flex relative flex-row-reverse my-auto w-[35%]`}
          >
            <a
              href={`/career`}
              className={`ml-10 navsection text-center my-auto flex align-middle items-center ${
                pathname.startsWith("/career")
                  ? "underline text-yellow-500"
                  : ""
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
              className={`ml-10 navsection text-center ${
                pathname.startsWith("/contact")
                  ? "underline text-yellow-500"
                  : ""
              }`}
            >
              Contact Us
            </a>
            <a
              href={`/blog`}
              className={`ml-10 navsection text-center ${
                pathname.startsWith("/blog") ? "underline text-yellow-500" : ""
              }`}
            >
              Blog
            </a>
          </div>
        </div>

        <div
          className={` relative w-full flex flex-row justify-evenly py-2 my-2 bg-[#3b0764] rounded-lg`}
        >
          <a
            href={`/`}
            className={`font-mono font-semibold text-sm md:text-md px-4 py-2 rounded-lg text-center ${
              pathname === "/"
                ? "text-yellow-500 font-extrabold text-md md:text-lg"
                : ""
            }`}
          >
            Add Url
          </a>
          <a
            href={`/top-100-urls`}
            className={`font-mono font-semibold text-sm md:text-md px-4 py-2 rounded-lg text-center ${
              pathname === "/top-100-urls"
                ? "text-yellow-500 font-extrabold text-md md:text-lg"
                : ""
            }`}
          >
            Top 100 Urls
          </a>
          <a
            href={`/all-urls`}
            className={`font-mono font-semibold text-sm md:text-md px-4 py-2 rounded-lg text-center ${
              pathname === "/all-urls"
                ? "text-yellow-500 font-extrabold text-md md:text-lg"
                : ""
            }`}
          >
            All Urls
          </a>
          <a
            href={`/search-urls`}
            className={`font-mono font-semibold text-sm md:text-md px-4 py-2 rounded-lg text-center ${
              pathname === "/search-urls"
                ? "text-yellow-500 font-extrabold text-md md:text-lg"
                : ""
            }`}
          >
            Search Urls
          </a>
        </div>
      </nav>

      {sideBar && (
        <div
          className={`absolute z-20 h-full w-full opacity-0`}
          onClick={() => {
            setSideBar(false);
          }}
        />
      )}
      {sideBar && <SideBar />}
    </>
  );
};

export default Navbar;
