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
    <div className="mb-5">
      <div className="p-4 pr-6 pl-6 mt-4 mb-4 m-auto border rounded-lg border-white">
        <p className="text-left text-amber-200 hover:text-sky-400 underline strong">
          Experience
        </p>
        {resume.map((role, index) => (
          <div className="text-white flex justify-between" key={index}>
            <p>
              {role.title}, {role.company}
            </p>
            <p>
              {role.startDate} - {role.endDate}
            </p>
          </div>
        ))}

        {/* <ListGroup className="flex flex-col w-5/6 mt-10">
          {resume.map((role, index) => (
            <ListGroup.Item key={index}>
              <div className="flex justify-between">
                <p>{role.title}</p>
                <p>{role.company}</p>
                <p>
                  {role.startDate} - {role.endDate}
                </p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup> */}
      </div>
      <div className="flex flex-wrap gap-2">
        <Button color="light">
          <HiArrowCircleDown className="mr-2 h-5 w-5" />
          Download Resume
        </Button>
      </div>
    </div>
  );
};
export default useWorkExperience;
