import React from "react";
import { login } from "../utils/api";
import LoginInput from "../components/LoginInput";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function Loginpages({ onLoginSuccess }) {
  const { locale } = React.useContext(LocaleContext);

  async function onLogin({ email, password }) {
    const { data, error } = await login({ email, password });

    if (!error) {
      onLoginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <h2>
        {locale === "id"
          ? "Yuk, login untuk menggunakan aplikasi"
          : "Login to use app, please"}
        .
      </h2>
      <LoginInput onLogin={onLogin} />
      <p>
        {locale === "id" ? "Belum punya akun" : "Don't have an account"}?{" "}
        <Link to="/register">
          {locale === "id" ? "Daftar di sini" : "Register here"}
        </Link>
      </p>
    </section>
  );
}

Loginpages.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default Loginpages;
