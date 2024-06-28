import { ListGroup } from "flowbite-react";

function useWorkExperience() {
  return (
    <div className="flex justify-center">
      <ListGroup className="w-3/4 mt-10">
        <ListGroup.Item>Brightpoint Community College</ListGroup.Item>
        <ListGroup.Item>Sands Anderson PC</ListGroup.Item>
        <ListGroup.Item>
          Accessia Health (Formerly Patient Services, Inc.)
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
export default useWorkExperience;
