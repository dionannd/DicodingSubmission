import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex items-center text-[22px]">
      <ul className="flex space-x-3">
        <li>
          <Link to={location.pathname === "/" ? "/archives" : "/"}>
            <h1 className="flex-1 underline underline-offset-4">
              {location.pathname === "/" ? "Arsip" : "Home"}
            </h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
