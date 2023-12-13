import React from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

export default function LoginInput({ onLogin }) {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");

  async function onSubmitHandler(e) {
    e.preventDefault();

    onLogin({ email, password });
  }

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={onEmailChangeHandler}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button type="button" onClick={onSubmitHandler}>
        Login
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
