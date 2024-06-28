import { ListGroup, Button } from "flowbite-react";
import { HiArrowCircleDown } from "react-icons/hi";

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
    <div>
      <div className="flex justify-center">
        <ListGroup className="w-3/4 mt-10">
          {resume.map((role, index) => (
            <ListGroup.Item key={index}>
              {role.title}
              {role.company}
              {role.startDate} - {role.endDate}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button>
          <HiArrowCircleDown className="mr-2 h-5 w-5" />
          Download Resume
        </Button>
      </div>
    </div>
  );
};
export default useWorkExperience;
