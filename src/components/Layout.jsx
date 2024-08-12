import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div
      className={`relative flex flex-col mx-auto w-[97.5] md:w-[95%] lg:w-[85%] h-screen align-middle items-center text-white`}
    >
      <Navbar />
      <main className={`relative w-full h-full`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
