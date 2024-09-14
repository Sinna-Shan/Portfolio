/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "./Button";
function ProjectCard({ heading, btnTxt, color, id, count, icon }) {
  return (
    <div
      className={`h-full bg-${color} ${id===count ? 'lg:w-full':'w-2/5'} duration-300 ease-linear`}
    >
      <div className="flex h-full flex-col items-center justify-center">
        {icon}
        <h1 className="py-10 text-4xl uppercase text-white">{heading}</h1>
        <Button type="primary">{btnTxt}</Button>
      </div>
    </div>
  );
}

export default ProjectCard;
