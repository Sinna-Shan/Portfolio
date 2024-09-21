/* eslint-disable no-unused-vars */
import { Link } from "react-scroll";
import { FaAlignJustify, FaArrowRightToBracket } from "react-icons/fa6";
import { useState } from "react";
import { useEffect } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isOpen]);

  return (
    <nav
      className={`top-0 z-10 h-16 w-full items-center justify-center md:fixed ${isOpen ? "absolute z-10 flex h-screen w-full bg-primary-300 bg-opacity-60 backdrop-blur-lg backdrop-filter" : ""} bg-primary-200 md:flex md:items-center md:justify-center md:bg-opacity-70 md:backdrop-blur-md md:backdrop-filter`}
    >
      <ul
        className={`gap-10 text-xl text-white md:flex ${isOpen ? "absolute top-0 z-10 flex h-screen flex-col items-center justify-center text-center" : "hidden"}`}
      >
        <li className="cursor-pointer duration-300 ease-linear hover:text-primary-500">
          <Link to="home" smooth={true} onClick={() => setIsOpen(false)}>
            home
          </Link>
        </li>
        <li className="cursor-pointer duration-300 ease-linear hover:text-primary-500">
          <Link
            to="about"
            smooth={true}
            onClick={() => setIsOpen(false)}
            offset={-62}
          >
            about
          </Link>
        </li>
        <li className="cursor-pointer duration-300 ease-linear hover:text-primary-500">
          <Link
            to="projects"
            smooth={true}
            offset={-62}
            onClick={() => setIsOpen(false)}
          >
            projects
          </Link>
        </li>
        <li className="cursor-pointer duration-300 ease-linear hover:text-primary-500">
          <Link
            to="contact"
            smooth={true}
            onClick={() => setIsOpen(false)}
            offset={-62}
          >
            contact
          </Link>
        </li>
      </ul>
      <div className="absolute right-3 top-3 z-10 flex w-full justify-end pr-3 text-white md:hidden">
        <FaAlignJustify
          className={`${!isOpen ? "" : "hidden"} h-8 w-8`}
          onClick={() => setIsOpen((o) => !o)}
        />
        <FaArrowRightToBracket
          className={`h-8 w-8 ${isOpen ? "top-0" : "hidden"} `}
          onClick={() => setIsOpen((o) => !o)}
        />
      </div>
    </nav>
  );
}

export default NavBar;
