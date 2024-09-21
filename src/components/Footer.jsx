import { FaSquareGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-end bg-primary-300 px-2 pb-5 pt-10">
      <div className="flex items-center justify-center gap-3">
        <a href="https://web.facebook.com/noah.singho.1/">
          <FaSquareGithub className="text-3xl text-shade-300 duration-300 ease-linear hover:text-primary-500" />
        </a>
        <a href="https://www.linkedin.com/in/noah-luth-57a0232a1/">
          <FaLinkedin className="text-3xl text-shade-300 duration-300 ease-linear hover:text-primary-500" />
        </a>
        <a href="https://github.com/Sinna-Shan">
          <FaFacebook className="text-3xl text-shade-300 duration-300 ease-linear hover:text-primary-500" />
        </a>
      </div>
      <p className="mt-4 text-shade-300 md:text-sm">
        {year} &copy; this website is created by Noah Shan.
      </p>
    </footer>
  );
}

export default Footer;
