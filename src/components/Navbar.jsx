import React from "react";

const Navbar = () => {
  return (
    <nav className={`relative w-full flex justify-between pb-3`}>
      <div className={`relative flex flex-row my-auto w-[35%]`}>
        <div className={`mr-10 navsection`}>About Us</div>
        <div className={`mr-10 navsection`}>Brands</div>
        <div className={`mr-10 navsection`}>Partners</div>
        <div className={`mr-10 navsection`}>Press</div>
      </div>

      <div className={`relative flex flex-col space-y-[7.5px]`}>
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
      </div>

      <div className={`relative flex flex-row-reverse my-auto w-[35%]`}>
        <div
          className={`ml-10 navsection my-auto flex align-middle items-center`}
        >
          Careers{" "}
          <span
            className={`text-[9px] px-[5px] py-[2px] h-fit bg-white rounded-[5px] font-bold text-black my-auto ml-2`}
          >
            WE'RE HIRING
          </span>
        </div>
        <div className={`ml-10 navsection`}>Contact Us</div>
        <div className={`ml-10 navsection`}>Blog</div>
      </div>
    </nav>
  );
};

export default Navbar;
