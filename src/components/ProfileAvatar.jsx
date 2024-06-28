import { Avatar } from "flowbite-react";

const useProfileAvatar = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <a href="#">
        <Avatar
          href="#"
          img="/public/allenmurfee.jpg"
          rounded
          alt="Allen Murfee photo"
        />
      </a>
    </div>
  );
};

export default useProfileAvatar;
