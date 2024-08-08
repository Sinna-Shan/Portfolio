/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Project({ title, description, image, link, btnMsg }) {
  return (
    <div className="flex flex-col w-full h-full rounded-md shadow-xl bg-[#f5f5f5] border border-[#eee]">
      <div className="overflow-hidden h-36 m-2 rounded-t-md">
        <img src={image} alt="project image" className="object-cover" />
      </div>
      <div className="flex flex-col m-2">
        <h2 className="text-xl mb-2">{title}</h2>
        <div className="h-32 overflow-y-scroll mb-8  scrollbar">
          <p className="text-[.8rem] leading-relaxed">{description}</p>
        </div>
        <a href={link} target="blank" className="flex flex-col items-center justify-center">
          <button className="w-full h-10 mx-2 mb-2 rounded-3xl text-[1rem] bg-[orangered] text-white hover:shadow-[inset_0_0_0_0.2rem_orangered] hover:text-[orangered] hover:bg-[#f1f3f5] transition-all duration-300">
            {btnMsg}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Project;
