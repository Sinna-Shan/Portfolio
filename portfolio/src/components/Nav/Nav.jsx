import { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css"

function Nav() {
  const navRef = useRef()

  function showNavBar() {
    navRef.current.classList.toggle(styles.navOpen);
  }
  return (
    <header className={styles.header} ref={navRef}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.mobileNav}>
        <button className={styles.menuBtn} onClick={showNavBar} name="close">
          <img src="close.svg" alt="close button" />
        </button>
        <button className={styles.menuBtn} onClick={showNavBar} name="open">
          <img src="menu.svg" alt="menu button" />
        </button>
      </div>
    </header>
  );
}

export default Nav;
