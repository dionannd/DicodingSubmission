import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

export default function RegisterInput({ onRegister }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [passwordConfirm, setPasswordConfirm] = useInput("");

  async function onSubmitHandler(e) {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      alert("Semua form harus diisi!");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Password tidak sesuai!");
      return;
    }

    onRegister({ name, email, password });
  }

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={setName} />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={setEmail} />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={setPassword}
      />

      <label htmlFor="password">Password Confirm</label>
      <input
        type="password"
        id="password_confirm"
        value={passwordConfirm}
        onChange={setPasswordConfirm}
      />

      <button type="button" onClick={onSubmitHandler}>
        Register
      </button>
    </div>
  );
}

RegisterInput.propTypes = {
  onRegister: PropTypes.func,
};
