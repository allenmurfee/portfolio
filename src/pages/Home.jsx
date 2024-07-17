import Contact from "../components/Contact";
import { List } from "flowbite-react";
import Work from "../components/Work";
import Recommendations from "../components/Recommendations";
import Education from "../components/Education";
import About from "../components/About";
import Photos from "../components/Photos";

const useHome = () => {
  return (
    <div className="bg-zinc-700">
      <div className="flex flex-row justify-between mt-5 mb-20">
        <About />
        <Photos />
      </div>

      <div className="flex flex-row justify-between mt-8">
        <Work />
        <Contact />
      </div>
      <div className="flex flex-row justify-between mt-14">
        <Recommendations />
        <Education />
      </div>
    </div>
  );
};

export default useHome;
