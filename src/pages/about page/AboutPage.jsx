/* eslint-disable react/no-unescaped-entities */
import Footer from "../../components/footer/Footer";
import Nav from "../../components/Nav/Nav";
function AboutPage() {
  return (
    <>
      <main className="min-h-[100vh]">
        <Nav />
        <main className="flex flex-col items-center justify-center md:flex-row lg:flex-row md:items-center md:justify-center lg:m-4 lg:gap-5 lg:min-h-[80vh]">
          <div className="w-90 h-72 overflow-hidden rounded-xl my-8 mx-4 shadow-xl md:flex-row md:w-full md:h-full md:mx-3 lg:m-0 lg:w-full">
            <img src="my image.jpg" alt="my image" />
          </div>
          <div className="border-2 rounded-lg m-2 p-3 border-[orangered] mb-7 md:mb-0 lg:m-0 lg:flex lg:flex-col lg:justify-center lg:px-8">
            <h1 className="text-2xl text-slate-700 font-semibold tracking-tight lg:text-5xl lg:my-3">
              Noah Shan Luth Singho
            </h1>
            <h3 className="text-lg text-[#e3673a] mb-13 lg:my-1 lg:text-3xl">
              full-stack developer
            </h3>

            <p className="text-[1rem] mb-4">
              <a href="mailto:noahluth.official@gmail.com" target="blank">
                noahluth.official@gmail.com
              </a>{" "}
              | (+94)76-3236693
            </p>

            <p className="text-[.8rem] text-[#555] leading-5 lg:text-lg lg:leading-8">
              Hello there, I am a dedicated Full Stack Developer with 1 year of
              hands-on experience at Plurative. Proficient in front-end and
              backend development in javascript, I specialize in crafting
              seamless and efficient web applications. I thrive in dynamic
              environments, delivering robust solutions from front-end
              interfaces to back-end architecture. Let's build something amazing
              together!
            </p>
            <div className="flex justify-between items-center mt-6 lg:my-10">
              <a
                href=""
                download={"cv.pdf"}
                className="bg-[orangered] text-white py-2 px-4 rounded-sm text-[.8rem] lg:text-lg"
              >
                Download CV
              </a>
              <div className="flex gap-1 lg:gap-3">
                <a href="https://wa.me/+94763236693" target="blank">
                  <img
                    src="whatsapp.svg"
                    alt="whatsapp-icon"
                    className="w-7 shadow-m lg:w-10"
                  />
                </a>
                <a
                  href="https://web.facebook.com/noah.singho.1/"
                  target="blank"
                >
                  <img
                    src="facebook-orangered.svg"
                    alt="fb-icon"
                    className="w-7 shadow-m lg:w-10"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/noah-luth-57a0232a1"
                  target="blank"
                >
                  <img
                    src="linkedin-orangered.svg"
                    alt="in-icon"
                    className="w-7 shadow-m lg:w-10"
                  />
                </a>
                <a href="https://github.com/Sinna-Shan" target="blank">
                  <img
                    src="github.svg"
                    alt="in-icon"
                    className="w-7 shadow-m lg:w-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </main>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
