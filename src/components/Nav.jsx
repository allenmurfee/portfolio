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
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Work Experience</NavbarLink>
        <NavbarLink href="#">Recommendations</NavbarLink>
        <NavbarLink href="#">Education</NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default useNav;
