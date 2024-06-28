import Contact from "../components/Contact";
import { List } from "flowbite-react";

function useHome() {
  return (
    <div className="bg-zinc-700">
      <div className="container mx-auto mt-14">
        <h1 className="italic text-left w-3/4 text-white">Hello World! 👋</h1>
        <h1 className="text-left w-3/4 mt-8 text-white">
          My name is Allen Murfee, and I'm a software developer.
        </h1>
      </div>
      <List className="mt-5 text-white" horizontal>
        <List.Item>• Software Developer at Brightpoint 💻</List.Item>
        <List.Item>• Husband 🤵‍♂️👰</List.Item>
        <List.Item>• Drummer 🥁</List.Item>
        <List.Item>• (Bad at) Rainbow 6 Siege 🎮</List.Item>
        <List.Item>• Go Hokies and Go Cowboys! 🦃🤠</List.Item>
      </List>

      <Contact />
    </div>
  );
}

export default useHome;
