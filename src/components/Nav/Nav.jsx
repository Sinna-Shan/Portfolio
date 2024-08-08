import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="flex h-full gap-4 items-center text-lg flex-col lg:flex-row ">
      <li>
        <NavLink to="/" className={({isActive}) => isActive ? 'text-[orangered] font-bold p-4' : 'font-normal p-4 hover:text-[orangered]'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({isActive}) => isActive ? 'text-[orangered] font-bold p-4' : 'font-normal p-4 hover:text-[orangered]'}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'text-[orangered] font-bold p-4' : 'font-normal p-4 hover:text-[orangered]'}>
          Projects
        </NavLink>
      </li>
    </ul>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  function displayNav() {
    setOpen((open) => !open);
  }
  return (
    <header className="bg-[#f8f9fa] sticky top-0 w-full h-16 flex flex-wrap drop-shadow-lg justify-end z-20">
      <nav className="hidden lg:block font-bold">
        <NavLinks />
      </nav>

      <div className="lg:hidden flex items-center justify-center p-4">
        <button onClick={displayNav} className={`${!open ? "hidden" : ""}`}>
          <img src="close.svg" alt="close button" className="w-6" />
        </button>
        <button onClick={displayNav} className={`${open ? "hidden" : ""}`}>
          <img src="menu.svg" alt="menu button"  className="w-6"/>
        </button>
      </div>

      {open && (
        <div className="absolute z-50 top-16 w-full bg-[#f8f9fa] h-64 flex justify-center transition-all duration-300 lg:hidden">
          <NavLinks />
        </div>
      )}
    </header>
  );
}

export default Nav;
