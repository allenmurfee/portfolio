import SkillsList from "../components/SkillsList";
import Photos from "../components/Photos";

const useAbout = () => {
  const brightpointSkills = [
    "JavaScript",
    "SCSS",
    "HTML",
    "Node.js",
    "PHP",
    "mySQL",
    "ExpressionEngine CMS",
    "Yarn",
  ];
  const bootcampSkills = [
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
    "GraphQL",
    "mySQL",
    "MongoDB",
    "npm",
  ];

  return (
    <div>
      <div className="relative flex flex-col md:flex-row justify-between md:mt-10 mb-20">
        <div className="w-full md:w-3/5 flex justify-center items-center flex-col">
          <div className="container">
            <h1 className="text-left text-amber-200 text-4xl md:text-6xl">
              Software Developer. 🧑‍💻
            </h1>
            <h1 className="text-left mt-8 text-white text-4xl md:text-5xl">
              Husband, Dog Dad, Vinyl Enthusiast, Drummer, Mediocre Video Game
              Player.
            </h1>
          </div>
          <div className="text-left text-slate-300 mt-10 text-lg">
            <p className="mb-5">
              In 2022, I decided it was time for a career change. While I
              enjoyed working in marketing, I knew it wasn't where I was
              supposed to be. I'd always been interested in software
              development, so, after getting a Bachelor's in Public Relations
              from Virginia Tech in 2020, I went back to school to the
              University of Richmond for a Software Development Bootcamp.
              <strong> And I never looked back.</strong>
            </p>
          </div>
        </div>
        <div className="flex-item self-center w-2/3 md:w-1/3 mt-5 md:m-auto border-0 md:rounded-3xl">
          <Photos pic={"/public/waylon3.png"} alt={"waylon"} />
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-between w-full p-4 pr-6 pl-6 mb-4 border rounded-lg border-white">
          <div className="flex-item w-full md:w-2/5 ml-5">
            <h2 className="text-left text-amber-200 text-3xl mb-2 font-bold">
              Software Developer, Brightpoint Community College
            </h2>
            <p className="text-left text-slate-300">
              I've gained invaluable experience working as a software developer
              at Brightpoint.
            </p>
            <div className="mt-2">
              <SkillsList skills={brightpointSkills} />
            </div>
          </div>
          <div className="flex-item w-full md:w-3/5 mt-2 h-full md:ml-5 shadow shadow-amber-200 mr-5">
            <Photos pic={"/public/brightpoint.png"} alt={"brightpoint"} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full p-4 pr-6 pl-6 mb-4 border rounded-lg border-white">
          <div className="flex-item w-full md:w-2/5 ml-5">
            <h2 className="text-left text-amber-200 text-3xl mb-2 font-bold">
              Bootcamp
            </h2>
            <p className="text-left text-slate-300">
              This is where it all started.
            </p>
            <div className="mt-2">
              <SkillsList skills={bootcampSkills} />
            </div>
          </div>
          <div className="flex-item w-full md:w-3/5 mt-2 h-full md:ml-5 shadow shadow-amber-200 mr-5">
            <Photos
              pic={"/public/u-of-r-certificate.png"}
              alt={"university of richmond certification"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default useAbout;
