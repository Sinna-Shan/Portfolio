import Footer from "./components/Footer";
import Home from "./components/Home";
// import NavBar from "./components/NavBar";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
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
