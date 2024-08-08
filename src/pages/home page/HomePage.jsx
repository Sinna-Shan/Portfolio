/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/footer/Footer";

function HomePage() {
  return (
    <>
      <main className="flex flex-col w-full items-center justify-center bg-[#f1f3f5]">
        <Nav />
        <section className="flex flex-col items-center justify-center min-h-[100vh] z-10">
          <div className="flex flex-col gap-5 items-center my-4 sm:px-10 px-3 lg:flex-row lg:my-8">
            <div className="overflow-hidden w-28 h-28 mb-2 rounded-full shadow-lg">
              <img src="my image cropped.jpg" alt="my image" />
            </div>
            <div className="flex gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl">I'm</h1>
              <div className="flex flex-col h-8 overflow-hidden sm:h-[2.5rem] lg:h-[3.4rem] leading-10">
                <span className="text-3xl text-[orangered] lg:animate-word-wheel sm:text-4xl lg:text-6xl lg:mb-2">
                  Noah Shan Luth
                </span>
                <span className="text-3xl text-[orangered] lg:animate-word-wheel sm:text-4xl lg:text-6xl lg:mb-2">
                  a Designer
                </span>
                <span className="text-3xl text-[orangered] lg:animate-word-wheel sm:text-4xl lg:text-6xl lg:mb-2">
                  a Frontend Dev
                </span>
                <span className="text-3xl text-[orangered] lg:animate-word-wheel sm:text-4xl lg:text-6xl lg:mb-2">
                  a Backend Dev
                </span>
                <span className="text-3xl text-[orangered] lg:animate-word-wheel sm:text-4xl lg:text-6xl lg:mb-2">
                  Noah Shan Luth
                </span>
              </div>
            </div>
          </div>
          <p className="text-[.8rem] leading-relaxed mx-[1rem] text-center mb-3  sm:text-[1rem] sm:mb-6 md:text-[1.1rem] md:mx-[10rem] lg:text-[1.4rem] lg:mx-[10rem] lg:mb-10">
            a full stack developer with a passion for creating robust,
            user-friendly web applications. From front-end design to back-end
            functionality, I build end-to-end solutions that drive engagement
            and deliver results. Let's turn your vision into reality with clean
            code, innovative design, and a focus on performance.
          </p>
          <Link to="/about" className="">
            <button className="bg-[orangered] my-6 text-white px-5 py-2 text-lg rounded-md hover:shadow-[inset_0_0_0_0.2rem_orangered] hover:text-[orangered] hover:bg-[#f1f3f5] transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm lg:text-[1.1rem] lg:py-3 lg:px-6 mt-8">
              let's collaborate...
            </button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
