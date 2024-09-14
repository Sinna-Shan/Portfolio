/* eslint-disable no-unused-vars */
import { BsFillSendFill } from "react-icons/bs";
import { FaSquareGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
function Home() {
  return (
    <section className="w-full bg-hero-img bg-cover">
      <main className="flex min-h-screen w-full flex-col items-center bg-primary-300/85 px-4 py-4 backdrop-blur-sm md:flex-row md:gap-10 lg:px-10">
        <div
          className="z-10 flex h-full w-full flex-col items-center justify-center gap-2 to-blue-500 px-4 py-6 text-left sm:gap-1 md:items-end"
          data-aos="fade-down-right"
        >
          <h4 className="text-lg uppercase tracking-wide text-shade-300 sm:text-2xl md:text-2xl lg:text-3xl">
            hello there!
          </h4>
          <h1 className="font-[Yesteryear] text-5xl font-normal text-white sm:text-6xl md:pt-4 md:text-right md:text-7xl lg:pt-4 lg:text-8xl">
            I&apos;m Noah
          </h1>
          <h3 className="text-center text-lg font-light text-shade-300 sm:text-2xl md:text-right md:text-2xl lg:text-3xl">
            A Designer | Full Stack Developer
          </h3>
          <div className="flex items-center justify-center gap-3 md:hidden">
            <FaSquareGithub className="text-3xl text-shade-300 duration-300 ease-linear hover:text-white" />
            <FaLinkedin className="text-3xl text-shade-300 duration-300 ease-linear hover:text-white" />
            <FaFacebook className="text-3xl text-shade-300 duration-300 ease-linear hover:text-white" />
          </div>
          <a
            className="mt-2 flex w-auto items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-lg text-white hover:bg-transparent hover:shadow-[inset_0_0_0_.1rem] hover:shadow-white hover:duration-500 md:mt-6 md:px-6 md:py-3 md:text-xl lg:px-8 lg:py-4 lg:text-2xl"
            href=""
          >
            {" "}
            <BsFillSendFill /> let&apos;s connect
          </a>
        </div>
        <div
          className="order-first flex h-full w-full items-center justify-center gap-3 md:order-2 md:justify-start md:gap-5 lg:pl-10"
          data-aos="fade-down-left"
        >
          <div className="h-72 w-72 animate-blob overflow-hidden border-4 border-primary-500 bg-cover shadow-lg hover:border-white hover:duration-500 hover:ease-in-out sm:border-4 md:h-80 md:w-72">
            <img src="my image new.jpg" alt=" my-image-for-hero-section" />
          </div>
          <div className="hidden flex-col items-center justify-center gap-3 md:flex lg:gap-5">
            <FaSquareGithub className="text-3xl text-shade-100 duration-300 ease-linear hover:text-white md:text-4xl lg:text-5xl" />
            <FaLinkedin className="text-3xl text-shade-100 duration-300 ease-linear hover:text-white md:text-4xl lg:text-5xl" />
            <FaFacebook className="text-3xl text-shade-100 duration-300 ease-linear hover:text-white md:text-4xl lg:text-5xl" />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Home;
