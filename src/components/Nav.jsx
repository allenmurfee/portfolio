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
    <Navbar fluid rounded>
      <ProfileAvatar />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite React
      </span>

      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Work Experience</NavbarLink>
        <NavbarLink href="#">Education</NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default useNav;
