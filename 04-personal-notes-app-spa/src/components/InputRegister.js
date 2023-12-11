import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { LocaleConsumer } from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function InputRegister({ register }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");

  const { theme } = React.useContext(ThemeContext);

  async function onSubmitHandler(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Semua form harus diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak sesuai!");
      return;
    }

    register({ name, email, password });
  }

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <div>
          <div className="flex flex-col mb-3">
            <label className="mb-2 text-xl" htmlFor="name">
              {locale === "id" ? "Nama" : "Name"}
            </label>
            <input
              type="text"
              placeholder=""
              className={`w-full px-3 border-[3px] py-1 text-black rounded-md focus:outline-none focus:ring-0 ${
                theme === "dark" ? "border-white" : "border-[#121212]"
              }`}
              value={name}
              onChange={setName}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-2 text-xl" htmlFor="email">
              {locale === "id" ? "Email" : "Email"}
            </label>
            <input
              type="email"
              placeholder=""
              className={`w-full px-3 border-[3px] py-1 text-black rounded-md focus:outline-none focus:ring-0 ${
                theme === "dark" ? "border-white" : "border-[#121212]"
              }`}
              value={email}
              onChange={setEmail}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="mb-2 text-xl" htmlFor="password">
              {locale === "id" ? "Kata Sandi" : "Password"}
            </label>
            <input
              type="password"
              placeholder=""
              autoComplete="current-password"
              className={`w-full px-3 border-[3px] py-1 text-black rounded-md focus:outline-none focus:ring-0 ${
                theme === "dark" ? "border-white" : "border-[#121212]"
              }`}
              value={password}
              onChange={setPassword}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-xl" htmlFor="confirmPassword">
              {locale === "id" ? "Konfirmasi Kata Sandi" : "Confirm Password"}
            </label>
            <input
              type="password"
              placeholder=""
              autoComplete="current-password"
              className={`w-full px-3 border-[3px] py-1 text-black rounded-md focus:outline-none focus:ring-0 ${
                theme === "dark" ? "border-white" : "border-[#121212]"
              }`}
              value={confirmPassword}
              onChange={setConfirmPassword}
            />
          </div>
          <button
            onClick={onSubmitHandler}
            className={`w-full p-2 text-xl font-semibold rounded-md $ ${
              theme === "dark"
                ? "bg-white text-[#121212]"
                : "bg-[#121212] text-white "
            }`}
          >
            {locale === "id" ? "Daftar" : "Register"}
          </button>
        </div>
      )}
    </LocaleConsumer>
  );
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
