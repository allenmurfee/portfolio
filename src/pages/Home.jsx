import Contact from "../components/Contact";
import { List } from "flowbite-react";
import Work from "../components/Work";
import Recommendations from "../components/Recommendations";
import Education from "../components/Education";

const useHome = () => {
  return (
    <div className="bg-zinc-700">
      <div className="container mx-auto mt-14">
        <h1 className="text-left w-3/4 text-amber-200">Hello World! 👋</h1>
        <h1 className="text-left w-3/4 mt-8 text-white">
          My name is Allen Murfee, and I'm a software developer.
        </h1>
      </div>
      <div className="text-left text-slate-300 mt-5">
        <p>
          I'm a Software Developer at Brightpoint, as well as a husband,
          drummer, Hokies fan, Cowboys fan, and a bad Rainbow 6 Siege player. 🤷‍♂️
        </p>
      </div>
      {/* <List className="mt-5 text-white" horizontal>
        <List.Item>• Software Developer at Brightpoint 💻</List.Item>
        <List.Item>• Husband 🤵‍♂️👰</List.Item>
        <List.Item>• Drummer 🥁</List.Item>
        <List.Item>• (Bad at) Rainbow 6 Siege 🎮</List.Item>
        <List.Item>• Go Hokies and Go Cowboys! 🦃🤠</List.Item>
      </List> */}
      <div className="flex flex-row justify-between mt-8">
        <Work />
        <Contact />
      </div>

      <Recommendations />
      <Education />
    </div>
  );
};

export default useHome;
