import { ListGroup, Button } from "flowbite-react";
import { HiArrowCircleDown, HiExternalLink } from "react-icons/hi";

const useWorkExperience = () => {
  let resume = [
    {
      company: "Brightpoint Community College",
      title: "Web Developer",
      startDate: "2023",
      endDate: "Current",
    },
    {
      company: "Sands Anderson PC",
      title: "Marketing Coordinator",
      startDate: "2021",
      endDate: "2023",
    },
    {
      company: "Accessia Health",
      title: "Marketing & Communications Coordinator",
      startDate: "2019",
      endDate: "2021",
    },
  ];

  return (
    <div className="w-full md:w-7/12 md:mr-3">
      <div className="p-4 pr-6 pl-6 mb-4 m-auto border rounded-lg border-white">
        <h2 className="text-left text-amber-200 text-3xl mb-6 font-bold">
          My Work Experience
        </h2>
        {resume.map((role, index) => (
          <div className="text-white flex justify-between mb-2" key={index}>
            <p>
              {role.title}, {role.company}
            </p>
            <p>
              {role.startDate} - {role.endDate}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-10 md:mb-auto">
        <Button color="light" className="outline outline-amber-200 mr-2">
          <HiArrowCircleDown className="mr-1 h-5 w-5" />
          Download Resume
        </Button>
        <Button color="light" className="outline outline-amber-200">
          <HiExternalLink className="mr-1 h-5 w-5" />
          View LinkedIn
        </Button>
      </div>
    </div>
  );
};
export default useWorkExperience;
