import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      {/* <button>
        <span>Button</span>
      </button> */}
      <div className=" text-white flex justify-between items-center h-24 px-4 bg-zinc-300 w-full">
        <h1 className="w-full text-3xl font-bold text-[#8F00FF]">
          <Link to="/">Justin Lee</Link>
        </h1>
        <ul className="hidden md:flex">
          <CustomLink to="/">
            <p className="p-4 font-semibold link link-underline link-underline-black text-black">Home</p>
          </CustomLink>
          <CustomLink to="/project">
            <p className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-black">Project</p>
          </CustomLink>
          <CustomLink to="/aboutme">
            <p className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-black">About Me</p>
          </CustomLink>
          <CustomLink to="/contact">
            <p className="p-4 whitespace-nowrap font-semibold link link-underline link-underline-black text-black">Contact</p>
          </CustomLink>
        </ul>
      </div>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
