import Contact from "../components/Contact";
import Work from "../components/Work";
import Recommendations from "../components/Recommendations";
import Education from "../components/Education";
import HomeInfo from "../components/HomeInfo";
import Photos from "../components/Photos";
import Projects from "../components/Projects";
import { Routes, Route, Link } from "react-router-dom";

const useHome = () => {
  return (
    <div className="bg-zinc-700">
      <div className="relative flex md:flex-row justify-between mt-10 mb-20">
        <HomeInfo />
        <div className="flex-item w-1/5 md:w-1/3 md:m-auto border-0 md:rounded-3xl">
          <Photos
            className-="flex-item w-1/5 md:w-1/3 md:m-auto border-0 md:rounded-3xl"
            pic={"/public/allen_and_caitlin.png"}
            alt={"allen and caitlin"}
          />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row md:justify-between mt-8">
        <Work />
        <Contact />
      </div>
      <div className="relative flex flex-col md:flex-row justify-between mt-14">
        <Recommendations />
        <Education />
      </div>
      <div className="mt-10">
        <Projects />
      </div>
    </div>
  );
};

export default useHome;
