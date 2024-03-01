import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../resources/projects";

const Projects = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div>
      <SectionTitle title={"Projects"} />
      <div className="flex sm:flex-col gap-10 items-center py-10">
        <div className="flex flex-col gap-10 border-l-2 border-[#0f509bd8]">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-sm px-5 
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] py-2 bg-[#0a4347] rounded-md w-[200px]"
                    : "text-white"
                } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex sm:flex-col items-center gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-secondary text-sm">
              {projects[selectedItemIndex].title}
            </h1>
            <h1 className="text-white text-sm">
              {projects[selectedItemIndex].description}
            </h1>
            <h1 className="text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              repellat animi dicta deleniti dolor sint nulla aliquid officiis
              tenetur ad aliquam iusto numquam eveniet quaerat vitae odio
              voluptatum maiores totam, itaque voluptate non vel? Excepturi
              assumenda totam animi repudiandae facilis quas molestiae et
              repellendus facere? Provident eos asperiores molestiae at?
            </h1>
          </div>
          <img
            src={projects[selectedItemIndex].image}
            className="w-56 h-56"
            alt="/image"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
