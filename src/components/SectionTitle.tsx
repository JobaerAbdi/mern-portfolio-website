import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-4 py-10">
      <h1 className="text-white text-3xl">{title}</h1>
      <div className="w-40 h-[1px] border-2px bg-tertiary"></div>
    </div>
  );
};

export default SectionTitle;
