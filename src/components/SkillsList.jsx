import { List } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";

const useSkillsList = ({ skills }) => {
  return (
    <List className="text-white">
      {skills.map((skill, index) => (
        <List.Item key={index} icon={HiCheckCircle}>
          {skill}
        </List.Item>
      ))}
    </List>
  );
};

export default useSkillsList;
