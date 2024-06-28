import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import ProfileAvatar from "./ProfileAvatar";

function useNav() {
  return (
    <Navbar className="bg-zinc-700" fluid rounded>
      <ProfileAvatar />
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          About
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          Work Experience
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          Recommendations
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          Education
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          Projects
        </NavbarLink>
        <NavbarLink className="text-white" href="#">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default useNav;
