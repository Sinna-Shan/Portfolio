import Footer from "./components/Footer";
import Home from "./components/Home";
// import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(function () {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <>
      {/* <header>
        <NavBar />
      </header> */}
      <main>
        <Home />
        <Stats />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
