import { FaSquareGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex pt-10 flex-col items-center justify-end bg-primary-300 pb-5 px-2">
      <div className="flex items-center justify-center gap-3">
        <FaSquareGithub className="text-3xl text-shade-300 hover:text-primary-500 duration-300 ease-linear" />
        <FaLinkedin className="text-3xl text-shade-300 hover:text-primary-500 duration-300 ease-linear" />
        <FaFacebook className="text-3xl text-shade-300 hover:text-primary-500 duration-300 ease-linear" />
      </div>
      <p className=" text-shade-300 mt-4 md:text-sm">
        {year} &copy; this website is created by Noah Shan.
      </p>
    </footer>
  );
}

export default Footer;
