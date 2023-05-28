import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1 pl-[10rem]">
        <a className="btn btn-ghost normal-case font-bold text-4xl">Logo</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-2xl pr-[10rem]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Project</Link>
          </li>
          <li>
            <Link href="/about">Tech Stack</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
