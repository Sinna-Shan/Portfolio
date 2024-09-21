import { FaDownload, FaWhatsapp } from "react-icons/fa6";
import Button from "./Button";
function About() {
  return (
    <section className="min-h-screen bg-shade-100" id="about">
      <div className="mx-4 flex h-screen w-auto items-center justify-around text-center">
        <div
          className="hidden h-full w-full items-center justify-center sm:flex sm:w-1/2 md:order-2"
          data-aos="fade-right"
        >
          <div className="h-64 w-64 animate-blob overflow-hidden border-4 border-primary-500 bg-cover shadow-lg hover:border-white hover:duration-500 hover:ease-in-out sm:border-4 md:h-80 md:w-72 lg:h-96 lg:w-96">
            <img src="second.jpg" alt=" my-image-for-hero-section" />
          </div>
        </div>

        <div className="order-2 sm:w-1/2 lg:pr-10">
          <h1
            className="text-4xl font-bold text-shade-300 lg:text-7xl"
            data-aos="fade-down"
          >
            <span className="text-primary-400">Hi!</span> I am Noah Shan
          </h1>
          <p
            className="pt-10 text-base lg:text-lg lg:leading-relaxed"
            data-aos="fade-left"
          >
            I design and develop cutting-edge full-stack web and desktop
            applications, delivering seamless user experiences and robust
            functionality.
          </p>
          <p className="pt-12 text-sm italic" data-aos="fade-left">
            like to know More?
          </p>
          <div
            className="mt-3 flex w-full flex-wrap items-center justify-center gap-2 px-3 lg:gap-3"
            data-aos="fade-up"
          >
            <a href="CV.pdf" download>
              <Button type="primary">
                <FaDownload className="text-xl" /> resume
              </Button>
            </a>
            <a href="https://wa.me/763236693">
              <Button type="secondary">
                <FaWhatsapp className="text-2xl lg:text-3xl" /> ask me!
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
