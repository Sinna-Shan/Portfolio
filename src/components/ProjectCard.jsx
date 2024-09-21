/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Button from "./Button";
function ProjectCard({ url, btnTxt, heading, icon }) {
  return (
    <div
      className={`relative flex h-auto w-[22rem] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg`}
    >
      <img src={url} alt="" className="h-full w-full" />
      <div className="absolute flex h-full w-full flex-col items-center justify-center bg-primary-500 py-2 duration-300 ease-linear hover:bg-primary-500/50">
        {icon}
        <h1 className="mb-4 mt-5 text-3xl text-white">{heading}</h1>
        <Button type="ternary">{btnTxt}</Button>
      </div>
    </div>
  );
}

export default ProjectCard;
