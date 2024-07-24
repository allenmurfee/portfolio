import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const useFooter = () => {
  return (
    <Footer className="bg-zinc-700 rounded-none shadow-none mt-5" container>
      <div className="w-full sm:flex sm:items-center sm:justify-between bg-zinc-700">
        <Link to="/">
          <Footer.Copyright
            className="text-white hover:underline"
            by="Allen Murfee"
            year={2024}
          />
        </Link>
        <div className="mt-4 flex space-x-6 sm:mt-0 justify-center">
          <Footer.Icon href="https://github.com/allenmurfee" icon={BsGithub} />
          <Footer.Icon
            href="https://www.linkedin.com/in/allen-murfee/"
            icon={BsLinkedin}
          />
        </div>
      </div>
    </Footer>
  );
};

export default useFooter;
