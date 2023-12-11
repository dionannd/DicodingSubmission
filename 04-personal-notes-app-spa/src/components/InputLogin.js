import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

function InputLogin({ login, theme }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  async function onSubmitHandler(e) {
    e.preventDefault();

    login({ email, password });
  }

  return (
    <div className="">
      <div className="flex flex-col mb-3">
        <label className="mb-2 text-xl" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          className="px-3 py-2 text-black rounded-md outline-none ring-0 "
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-xl" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          className="px-3 py-2 text-black rounded-md outline-none ring-0"
        />
      </div>
      <button
        onClick={onSubmitHandler}
        className={`w-full p-2 text-xl font-semibold rounded-md ${
          theme === "dark" ? "bg-white text-black" : "bg-[#121212] text-white"
        }`}
      >
        Login
      </button>
    </div>
  );
}

InputLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

export default InputLogin;
