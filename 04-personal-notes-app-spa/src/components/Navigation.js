import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { FiLogOut } from "react-icons/fi";
import { LocaleConsumer } from "../contexts/LocaleContext";

function Navigation({ logout, name }) {
  const location = useLocation();

  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => (
        <nav className="flex items-center text-2xl">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to={location.pathname === "/" ? "/archives" : "/"}>
                <h1 className="flex-1 underline underline-offset-4">
                  {location.pathname === "/" && locale === "id"
                    ? "Terarsip"
                    : location.pathname === "/" && locale === "en"
                    ? "Archived"
                    : location.pathname === "/archives" && locale === "id"
                    ? "Beranda"
                    : "Home"}
                </h1>
              </Link>
            </li>
            <li>
              <button onClick={toggleLocale}>
                {locale === "id" ? "en" : "id"}
              </button>
            </li>
            <li>
              <ToggleTheme />
            </li>
            <li>
              <button onClick={logout} className="flex items-center gap-2">
                <FiLogOut /> {name}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </LocaleConsumer>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
