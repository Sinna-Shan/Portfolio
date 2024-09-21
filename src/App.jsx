import Footer from "./components/Footer";
import Home from "./components/Home";
import { FaAnglesUp } from "react-icons/fa6";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import { animateScroll } from "react-scroll";

function App() {
  useEffect(function () {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Home />
        <Stats />
        <About />
        <Projects />
        <Contact />
        <FaAnglesUp
          className="flex fixed bottom-5 right-5 z-10 h-12 w-12 cursor-pointer rounded-full bg-primary-500 p-3 text-base text-white"
          onClick={() => animateScroll.scrollToTop()}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
