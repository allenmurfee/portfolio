import { Button, Card } from "flowbite-react";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const useProjects = () => {
  return (
    <div id="projects">
      <h2 className="text-left text-amber-200 text-3xl mb-4 font-bold">
        Projects
      </h2>
      <div className="flex flex-col items-center md:flex-row justify-between">
        <Card className="max-w-xs md:max-w-sm lg:max-w-sm bg-zinc-800 mb-3 md:mr-3">
          <h5 className="text-2xl font-bold tracking-wide text-amber-200">
            THE LEET GRIND
          </h5>
          <p className="font-normal text-white">
            The Leet Grind is a LeetCode problem tracking application that helps
            users organize and monitor their coding practice progress.
          </p>
          <Button
            color="gray"
            className="outline outline-amber-200"
            href="https://github.com/allenmurfee/the-leet-grind"
          >
            <HiExternalLink className="mr-1 h-5 w-5" />
            View App
          </Button>
        </Card>
        <Card className="max-w-xs md:max-w-sm lg:max-w-sm bg-zinc-800 mb-3 md:mr-3">
          <h5 className="text-2xl font-bold tracking-wide text-amber-200">
            FLASHCARD AI GENERATOR
          </h5>
          <p className="font-normal text-white">
            A Next.js (React) app that uses Supabase (as a SQL database) and
            Google's Gemini 1.5 model to generate flashcards from lecture notes.
          </p>
          <Button
            color="gray"
            className="outline outline-amber-200"
            href="https://github.com/allenmurfee/flashcard-generator-ai"
          >
            <HiExternalLink className="mr-1 h-5 w-5" />
            View App
          </Button>
        </Card>
        <Card className="max-w-xs md:max-w-xs lg:max-w-sm bg-zinc-800 mb-3 md:mr-3">
          <h5 className="text-2xl font-bold tracking-wide text-amber-200">
            LISTIFY
          </h5>
          <p className="font-normal text-white">
            MERN stack to-do list app built with React, Node.js, GraphQL,
            MongoDB, and Express.js.
          </p>
          <Button
            color="gray"
            className="outline outline-amber-200"
            href="https://young-island-68053.herokuapp.com/"
          >
            <HiExternalLink className="mr-1 h-5 w-5" />
            View App
          </Button>
          <Button
            color="gray"
            className="outline outline-amber-200"
            href="https://github.com/allenmurfee/todo-list-app"
          >
            <BsGithub className="mr-1 h-5 w-5" />
            GitHub Repo
          </Button>
        </Card>
      </div>
    </div>
  );
};
export default useProjects;
