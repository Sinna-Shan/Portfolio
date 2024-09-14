/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  FaRegCircleLeft,
  FaRegCircleRight,
  FaPizzaSlice,
  FaMapLocationDot,
  FaCompactDisc,
} from "react-icons/fa6";

import ProjectCard from "./ProjectCard";
const projects = [
  {
    id: 1,
    color: "primary-200",
    btnTxt: "taste it now",
    heading: "Fast Pizza",
    icon: <FaPizzaSlice className="text-8xl text-primary-300" />,
  },
  {
    id: 2,
    color: "primary-400",
    btnTxt: "book now",
    heading: "world wise",
    icon: <FaMapLocationDot className="text-8xl text-primary-300" />,
  },
  {
    id: 3,
    color: "primary-500",
    btnTxt: "ready... action!",
    heading: "use popcorn",
    icon: <FaCompactDisc className="text-8xl text-primary-300" />,
  },
];
function Projects() {
  const [count, setCount] = useState(1);
  function next() {
    if (count >= projects.length) return setCount(1);
    setCount((c) => c + 1);
  }
  function previous() {
    if (count <= 1) return setCount(projects.length);
    setCount((c) => c - 1);
  }
  return (
    <section className="w-full bg-primary-100">
      <h3 className="py-5 text-center text-base text-shade-300 md:py-10 md:text-2xl lg:py-20 lg:text-4xl">
        See what I&apos;ve built...
      </h3>
      <div className="relative bg-green-300" data-aos="flip-down">
        <FaRegCircleLeft
          className="absolute left-2 top-1/2 z-50 text-2xl text-primary-100 lg:left-4 lg:text-4xl"
          onClick={previous}
        />
        <div className="flex h-[80dvh] overflow-hidden">
          {projects.map((project) => (
            <ProjectCard
              heading={project.heading}
              btnTxt={project.btnTxt}
              color={project.color}
              key={project.id}
              id={project.id}
              count={count}
              icon={project.icon}
            />
          ))}
        </div>
        <FaRegCircleRight
          className="absolute right-1 top-1/2 z-50 text-2xl text-primary-100 lg:right-2 lg:text-4xl"
          onClick={next}
        />
      </div>
    </section>
  );
}

export default Projects;
