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
            MongoDB, and Express.js. My responsibilities: writing React code,
            connecting GraphQL with React, and GraphQL queries and mutations.
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
        <Card className="max-w-xs md:max-w-sm lg:max-w-sm bg-zinc-800 mb-3 md:mr-3">
          <h5 className="text-2xl font-bold tracking-wide text-amber-200">
            PET 2 VET
          </h5>
          <p className="font-normal text-white">
            This app is for a hypothetical veterinarian client. It allows users
            to submit their pets’ medical info for their vets. Uses MVC layout,
            JavaScript/Handlebars, MySQL, and Express.js for routing and session
            data.
          </p>
          <Button
            color="gray"
            className="outline outline-amber-200"
            href="https://damp-forest-39395.herokuapp.com"
          >
            <HiExternalLink className="mr-1 h-5 w-5" />
            View App
          </Button>
          <Button
            color="gray"
            className="outline outline-amber-200"
            href="https://github.com/allenmurfee/pet-to-vet"
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
