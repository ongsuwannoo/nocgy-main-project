import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Home from "../components/Home";
import Project from "../components/Project";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <div className="grid h-full place-content-center content-center mb-24">
        <Home />
      </div>

      <div className="grid h-full mb-24">
        <Project />
      </div>

      <div className="grid h-full mb-24">
        <Stack />
      </div>

      <div className="grid h-full mb-24">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
