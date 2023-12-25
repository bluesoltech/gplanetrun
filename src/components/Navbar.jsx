import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex p-3 justify-around items-center bg-white">
        <div className="text-3xl">Logo</div>
        <nav>
          <ul className="flex text-gray-400  active:text-black">
            <li className="m-3 px-1.5 text-xl hover:text-black">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="m-3 px-1.5 text-xl hover:text-black">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold" : ""
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="m-3 px-1.5 text-xl hover:text-black">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold" : ""
                }
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
            <li className="m-3 px-1.5 text-xl hover:text-black">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold" : ""
                }
                to="/result"
              >
                Results
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
