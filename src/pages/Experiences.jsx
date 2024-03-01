import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { experiences } from "../resources/experiences";

const Experiences = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex sm:flex-col gap-10 items-center py-10">
        <div className="flex flex-col gap-10 border-l-2 border-[#0f509bd8]">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-sm px-5 
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] py-2 bg-[#0a4347] rounded-md w-[150px]"
                    : "text-white"
                } `}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-secondary text-sm">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-sm">
            {experiences[selectedItemIndex].company}
          </h1>
          <h1 className="text-white text-sm">
            {experiences[selectedItemIndex].description}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
