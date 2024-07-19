import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import ProfileAvatar from "./ProfileAvatar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const useNav = () => {
  return (
    <Navbar className="bg-zinc-700" fluid rounded>
      <Link to="/">
        <ProfileAvatar />
      </Link>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className="text-white hover:text-amber-300 active:text-amber-200">
          <Link to="/">Home</Link>
        </NavbarLink>
        <NavbarLink className="text-white hover:text-amber-300 active:text-amber-200">
          <Link to="/about">About</Link>
        </NavbarLink>
        <NavbarLink
          className="text-white hover:text-amber-300 active:text-amber-200"
          href="#"
        >
          Work Experience
        </NavbarLink>
        <NavbarLink
          className="text-white hover:text-amber-300 active:text-amber-200"
          href="#"
        >
          Recommendations
        </NavbarLink>
        <NavbarLink
          className="text-white hover:text-amber-300 active:text-amber-200"
          href="#"
        >
          Education
        </NavbarLink>
        <NavbarLink
          className="text-white hover:text-amber-300 active:text-amber-200"
          href="#"
        >
          Projects
        </NavbarLink>
        <NavbarLink
          className="text-white hover:text-amber-300 active:text-amber-200"
          href="#"
        >
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default useNav;
