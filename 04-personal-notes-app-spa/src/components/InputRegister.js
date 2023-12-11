import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function InputRegister({ register }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, setConfirmPassword] = useInput("");

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
    <div>
      <div className="mb-3">
        <label className="mb-2 text-xl" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-0"
          value={name}
          onChange={setName}
        />
      </div>
      <div className="mb-3">
        <label className="mb-2 text-xl" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-0"
          value={email}
          onChange={setEmail}
        />
      </div>
      <div className="mb-3">
        <label className="mb-2 text-xl" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-0"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 text-xl" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          autoComplete="current-password"
          className="w-full px-3 py-2 text-black rounded-md focus:outline-none focus:ring-0"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </div>
      <button
        onClick={onSubmitHandler}
        className="w-full p-2 text-xl font-semibold text-black bg-white rounded-md"
      >
        Register
      </button>
    </div>
  );
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
