import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeConsumer } from "../contexts/ThemeContext";

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <button className="toggle-theme" type="button" onClick={toggleTheme}>
          {theme === "light" ? <FiMoon /> : <FiSun />}
        </button>
      )}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
