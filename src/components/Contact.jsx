import { FaEnvelope, FaMobileScreen } from "react-icons/fa6";
function Contact() {
  return (
    <section className="flex min-h-[60dvh] w-full" id="contact">
      <div
        className="hidden bg-shade-300 py-4 md:flex md:w-1/2 md:items-center md:justify-end md:pr-5 lg:py-16 lg:pr-10"
        data-aos="fade-right"
      >
        <h1 className="text-right text-5xl leading-normal text-primary-300 lg:text-8xl lg:text-shade-200 lg:leading-tight">
          To start building your dream,
        </h1>
      </div>
      <div
        className="items-right flex w-full flex-col justify-center bg-primary-400 py-4 pr-4 text-right md:w-1/2 md:pl-5 md:text-left lg:py-16 lg:pl-10"
        data-aos="fade-left"
      >
        <h1 className="text-5xl font-extralight text-shade-200 sm:text-7xl md:text-6xl lg:text-8xl">
          I&apos;m always here
        </h1>
        <p className="pt-10 text-sm text-shade-200 lg:pt-6 lg:text-base">
          shear your ideas with me
        </p>
        <a
          href="mailto:noahluth.officaial@gmail.com"
          className="flex items-center justify-end gap-5 text-lg text-white underline md:justify-start md:gap-3 md:text-lg lg:pt-2 lg:text-2xl"
        >
          <FaEnvelope className="text-shade-300" /> noahluth.official@gmail.com
        </a>
        <p className="flex items-center justify-end gap-5 pt-2 text-lg text-white md:justify-start md:gap-3 md:text-lg lg:text-2xl lg:pt-4">
          <FaMobileScreen className="text-shade-300" /> (+94)76-3236693
        </p>
      </div>
    </section>
  );
}

export default Contact;
