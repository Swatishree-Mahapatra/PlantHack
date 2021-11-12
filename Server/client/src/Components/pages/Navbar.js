import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {}, []);

  return (
    <header className="bg-gray-800 text-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="ml-3 text-xl title-font font-medium text-red mb-4 md:mb-0"
          to={"/"}
        >
          <Link to={"/"}>
            <h1 className="text-2xl"> 🌳Plant Hack</h1>
          </Link>
        </Link>

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          {/* <Link
            to="#"
            className=" hover:bg-gray-700  px-3 py-2 rounded-md text-sm font-medium"
          >
            Forum
          </Link> */}
        </nav>

        <div className={` mr-0`}>
          <Link
            to="#"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Forum
          </Link>
          <Link
            to="#"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Leaderboard
          </Link>
          <Link
            to="#"
            className=" hover:bg-gray-700  px-8 py-2 rounded-md  font-medium"
          >
            Login
          </Link>
          <button
            className=" bg-pink-300 hover:bg-gray-900 hover:text-white font-bold py-2 px-4 border  rounded`}
            "
          >
            Signup
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
