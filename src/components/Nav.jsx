import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import ProfileAvatar from "./ProfileAvatar";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useNav = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
        <NavbarLink>
          <Link className="text-white hover:text-amber-200" to="/#work">
            Work
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link className="text-white hover:text-amber-200" to="/#contact">
            Contact
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link
            className="text-white hover:text-amber-200"
            to="/#recommendations"
          >
            Recommendations
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link className="text-white hover:text-amber-200" to="/#education">
            Education
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link className="text-white hover:text-amber-200" to="/#projects">
            Projects
          </Link>
        </NavbarLink>
        <NavbarLink>
          <Link
            className="text-white hover:text-amber-200"
            to="https://github.com/allenmurfee/portfolio-allenmurfee"
          >
            Portfolio Repo
          </Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default useNav;
