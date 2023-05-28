import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="mb-8 mt-[10%] font-bold text-7xl">Hello, world</p>
      <p className="mb-8 text-3xl">Full Stack Developer</p>
      <p className="my-[5%] text-3xl px-[16rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus
        necessitatibus minima corrupti neque. Facilis voluptas est libero quidem
        blanditiis, quod consequatur, cum enim minima cumque nobis nemo soluta
        et.
      </p>
      <div className="flex flex-row gap-16">
        <button className="btn btn-outline btn-accent btn-lg text-white">
          Resume
        </button>
        <FontAwesomeIcon
          icon={faGithub}
          className="text-accent"
          style={{ fontSize: 60 }}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-accent"
          style={{ fontSize: 60 }}
        />{" "}
      </div>
    </div>
  );
};
export default Home;
