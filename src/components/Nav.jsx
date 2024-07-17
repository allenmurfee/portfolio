import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import ProfileAvatar from "./ProfileAvatar";

const useNav = () => {
  return (
    <Navbar className="bg-zinc-700" fluid rounded>
      <ProfileAvatar />
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" className="text-white">
          Home
        </NavbarLink>
        <NavbarLink
          className="active:text-amber-200 text-white hover:text-amber-300"
          href="#"
        >
          About
        </NavbarLink>
        <NavbarLink className="active:text-amber-200 text-white" href="#">
          Work Experience
        </NavbarLink>
        <NavbarLink className="active:text-amber-200 text-white" href="#">
          Recommendations
        </NavbarLink>
        <NavbarLink className="active:text-amber-200 text-white" href="#">
          Education
        </NavbarLink>
        <NavbarLink className="active:text-amber-200 text-white" href="#">
          Projects
        </NavbarLink>
        <NavbarLink className="active:text-amber-200 text-white" href="#">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default useNav;
