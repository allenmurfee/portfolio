import SkillsList from "../components/SkillsList";

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
  const bootcampSkills = ["JavaScript", "React", "CSS", "HTML", "Node.js"];

  return (
    <div>
      <div className="relative flex md:flex-row justify-between mt-10 mb-20">
        <div className="w-full md:w-3/5 flex justify-center items-center flex-col">
          <div className="container">
            <h1 className="text-left text-amber-200 text-4xl md:text-6xl">
              Software Developer. 🧑‍💻
            </h1>
            <h1 className="text-left mt-8 text-white text-4xl md:text-5xl">
              Husband to Caitlin, Dog Dad, Vinyl Enthusiast, Drummer, Mediocre
              Video Game Player.
            </h1>
          </div>
          <div className="text-left text-slate-300 mt-10 text-lg">
            <p className="mb-5">
              In 2022, I decided it was time for a career change. While I
              enjoyed working in marketing, I knew it wasn't where I was
              supposed to be.
            </p>
            <p>
              I had always been interested in software development. So, after
              getting a Bachelor's in Public Relations from Virginia Tech in
              2020, I went back to school to the University of Richmond for a
              Software Development Bootcamp.
              <strong> And I never looked back.</strong>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full p-4 pr-6 pl-6 mb-4 m-auto border rounded-lg border-white">
          <h2 className="text-left text-amber-200 text-3xl mb-2 font-bold">
            Software Developer, Brightpoint Community College
          </h2>
          <p className="text-left text-slate-300">
            I've gained invaluable experience working as a developer at
            Brightpoint.
          </p>
          <div className="mt-2">
            <SkillsList skills={brightpointSkills} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default useAbout;
