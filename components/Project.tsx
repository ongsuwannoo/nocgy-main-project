import React from "react";
import Card from "./Card";

const Project = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <span className="my-8 font-bold text-5xl">
        PR
        <span className="underline underline-offset-[1rem] decoration-[#FD014E]">
          OJE
        </span>
        CT
      </span>
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default Project;
