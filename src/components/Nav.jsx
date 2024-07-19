import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import ProfileAvatar from "./ProfileAvatar";
import { Routes, Route, Link } from "react-router-dom";

const useNav = () => {
  return (
    <Navbar className="bg-zinc-700" fluid rounded>
      <Link to="/">
        <ProfileAvatar />
      </Link>
      <NavbarToggle />
      <NavbarCollapse className="bg-zinc-700">
        <NavbarLink>
          <Link className="text-white hover:text-amber-200" to="/">
            Home
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link className="text-white hover:text-amber-200" to="/about">
            About
          </Link>
        </NavbarLink>
        <NavbarLink className="custom-navbar-link text-white hover:text-amber-200 focus:text-amber-200" href="#work">
          Work Experience
        </NavbarLink>
        <NavbarLink className="custom-navbar-link text-white hover:text-amber-300" href="#contact">
          Contact
        </NavbarLink>
        <NavbarLink
          className="custom-navbar-link text-white hover:text-amber-300"
          href="#recommendations"
        >
          Recommendations
        </NavbarLink>
        <NavbarLink
          className="custom-navbar-link text-white hover:text-amber-300"
          href="#education"
        >
          Education
        </NavbarLink>
        <NavbarLink
          className="custom-navbar-link text-white hover:text-amber-300"
          href="#projects"
        >
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default useNav;
