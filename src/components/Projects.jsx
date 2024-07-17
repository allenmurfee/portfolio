import { Button, Card } from "flowbite-react";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

const useProjects = () => {
  return (
    <div>
      <h2 className="text-left text-amber-200 text-3xl mb-4 font-bold">
        Projects
      </h2>
      <div className="flex flex-col items-center md:flex-row justify-between">
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
            className="outline outline-sky-300"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/austinhague/")
            }
          >
            View App
            <HiExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <Button
            color="gray"
            className="outline outline-sky-300"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/austinhague/")
            }
          >
            GitHub Repo
            <BsGithub className="ml-2 h-5 w-5" />
          </Button>
        </Card>
        <Card className="max-w-xs md:max-w-sm lg:max-w-sm bg-zinc-800 mb-3 md:mr-3">
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
            className="outline outline-sky-300"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/austinhague/")
            }
          >
            View App
            <HiExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <Button
            color="gray"
            className="outline outline-sky-300"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/austinhague/")
            }
          >
            GitHub Repo
            <BsGithub className="ml-2 h-5 w-5" />
          </Button>
        </Card>
        <Card className="max-w-xs md:max-w-sm lg:max-w-sm bg-zinc-800 mb-3">
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
            className="outline outline-sky-300"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/austinhague/")
            }
          >
            View App
            <HiExternalLink className="ml-2 h-5 w-5" />
          </Button>
          <Button
            color="gray"
            className="outline outline-sky-300"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/austinhague/")
            }
          >
            GitHub Repo
            <BsGithub className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </div>
  );
};
export default useProjects;
