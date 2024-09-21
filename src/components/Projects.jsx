/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import {
  FaPizzaSlice,
  FaMapLocationDot,
  FaCompactDisc,
  FaHouseChimney,
  FaPersonWalking,
  FaCarrot,
} from "react-icons/fa6";

import ProjectCard from "./ProjectCard";
import Button from "./Button";
const projects = [
  {
    id: 1,
    color: "primary-200",
    btnTxt: "taste it now",
    heading: "Fast Pizza",
    url: "pizza.jpg",
    icon: <FaPizzaSlice className="text-5xl text-primary-300" />,
    gitLink: "https://github.com/Sinna-Shan/fast-react-pizza.git",
  },
  {
    id: 2,
    color: "primary-400",
    btnTxt: "stat now",
    heading: "world wise",
    url: "jogging.jpg",
    icon: <FaPersonWalking className="text-5xl text-primary-300" />,
    gitLink: "https://github.com/Sinna-Shan/worldwise.git",
  },
  {
    id: 3,
    color: "primary-500",
    btnTxt: "watch today!",
    heading: "use popcorn",
    url: "movie.jpg",
    icon: <FaCompactDisc className="text-5xl text-primary-300" />,
    gitLink: "https://github.com/Sinna-Shan/use-pop-corn.git",
  },
  {
    id: 4,
    color: "primary-500",
    btnTxt: "check in",
    heading: "world oasis",
    url: "cabin.jpg",
    icon: <FaHouseChimney className="text-5xl text-primary-300" />,
    gitLink: "https://github.com/Sinna-Shan/the-world-oasis.git",
  },
  {
    id: 5,
    color: "primary-500",
    btnTxt: "book today!",
    heading: "Natures",
    icon: <FaMapLocationDot className="text-5xl text-primary-300" />,
    gitLink: "https://github.com/Sinna-Shan/natours.git",
    url: "map.jpg",
  },
  {
    id: 6,
    color: "primary-500",
    btnTxt: "Order now!",
    heading: "Omini food",
    icon: <FaCarrot className="text-5xl text-primary-300" />,
    gitLink: "https://github.com/Sinna-Shan/Omni-food-desktop.git",
    url: "order.jpg",
  },
];
function Projects() {
  const [show, setShow] = useState(false);

  return (
    <section className="flex h-auto flex-col bg-primary-100" id="projects">
      <h3 className="pt-10 text-center text-3xl mb-10 md:mb-3 text-shade-300 md:py-10 md:text-4xl lg:py-10 lg:text-4xl">
        See what I&apos;ve built...
      </h3>

      <div
        className={`mb-10 flex ${!show ? 'h-[15rem] md:h-[16rem]': 'h-full'} w-full flex-wrap justify-center gap-4 overflow-hidden px-3 ease-linear`}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            url={project.url}
            icon={project.icon}
            btnTxt={project.btnTxt}
            heading={project.heading}
            gitLink={project.gitLink}
          />
        ))}
      </div>
      <footer className="mb-10 flex w-full justify-center">
        <Button type={"primary"} onClick={() => setShow((s) => !s)}>
          { !show ? 'show more' : 'show less' }
        </Button>
      </footer>
    </section>
  );
}

export default Projects;
