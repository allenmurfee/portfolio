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
        <Photos />
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
