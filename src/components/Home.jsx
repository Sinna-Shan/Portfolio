/* eslint-disable no-unused-vars */
import { BsFillSendFill } from "react-icons/bs";
function Home() {
  return (
    <div className="bg-hero-img bg-cover">
      <section className="flex h-screen flex-col bg-primary-300/85 px-4 py-4 backdrop-blur-sm md:flex-row lg:px-10">
        <div className="to-blue-500py-6 z-10 flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-left sm:gap-1 md:items-start lg:items-end">
          <h4 className="text-lg uppercase tracking-wide text-shade-300 sm:text-2xl md:text-xl lg:text-4xl">
            hello there!
          </h4>
          <h1 className="text-5xl font-normal text-white sm:text-6xl md:text-6xl lg:text-8xl ">
            I&apos;m Noah
          </h1>
          <h3 className="text-center text-lg font-light text-shade-300 sm:text-2xl md:text-xl lg:text-right lg:text-3xl">
            A Designer | Full Stack Developer
          </h3>
          <a
            className="mt-6 flex w-44 items-center justify-center gap-2 rounded-xl bg-primary-500 px-1 py-3 text-lg text-white hover:bg-transparent hover:shadow-[inset_0_0_0_.1rem] hover:shadow-white hover:duration-500 lg:mt-8 lg:w-auto lg:px-8 lg:py-4 lg:text-2xl"
            href=""
          >
            <BsFillSendFill /> let&apos;s connect
          </a>
        </div>
        <div className="order-first flex h-full w-full items-center justify-center md:order-2 lg:justify-start lg:pl-10">
          <div className="h-52 w-52 animate-blob overflow-hidden border-4 border-primary-500 bg-cover shadow-lg hover:border-white hover:duration-500 hover:ease-in-out sm:border-4 md:h-80 md:w-72">
            <img src="my image new.jpg" alt=" my-image-for-hero-section" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
