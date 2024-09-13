/* eslint-disable react/prop-types */

import Button from "./Button";
function ProjectCard({ heading, btnTxt, url, id, count, icon }) {
  return (
    <div
      className={`h-full w-full bg-[url(${url})] bg-cover ${count !== id && "hidden"}`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-shade-300/70 backdrop-blur-sm">
        {icon}
        <h1 className="py-10 text-4xl uppercase text-white">{heading}</h1>
        <Button type="primary" >
          {btnTxt}
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
