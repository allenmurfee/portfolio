import { Avatar } from "flowbite-react";

const useProfileAvatar = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <a href="#">
        <Avatar
          img="/portfolio-allenmurfee/public/allen.jpg"
          rounded
          bordered
          color="gray"
          size="md"
        />
      </a>
    </div>
  );
};

export default useProfileAvatar;
