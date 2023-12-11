import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function InputLogin({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const { theme } = React.useContext(ThemeContext);

  async function onSubmitHandler(e) {
    e.preventDefault();

    login({ email, password });
  }

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <div className="">
          <div className="flex flex-col mb-3">
            <label className="mb-2 text-xl" htmlFor="email">
              {locale === "id" ? "Email" : "Email"}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onEmailChange}
              className={`px-3 py-2 text-black rounded-md border-[3px] outline-none ring-0 ${
                theme === "dark" ? "border-white" : "border-[#121212]"
              }`}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-xl" htmlFor="password">
              {locale === "id" ? "Kata Sandi" : "Password"}
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={onPasswordChange}
              className={`px-3 py-2 text-black rounded-md border-[3px] outline-none ring-0 ${
                theme === "dark" ? "border-white" : "border-[#121212]"
              }`}
            />
          </div>
          <button
            type="button"
            onClick={onSubmitHandler}
            className={`w-full p-2 text-xl font-semibold rounded-md ${
              theme === "dark"
                ? "bg-white text-black"
                : "bg-[#121212] text-white"
            }`}
          >
            Login
          </button>
        </div>
      )}
    </LocaleConsumer>
  );
}

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default InputLogin;
