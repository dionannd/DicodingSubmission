import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import InputLogin from "../components/InputLogin";
import { login } from "../utils/api";

function LoginPage({ loginSuccess, locale }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section>
      <h2 className="block mb-6 text-xl font-bold">
        {locale === "id"
          ? "Login untuk menggunakan aplikasi"
          : "Login to use application"}
        .
      </h2>
      <InputLogin login={onLogin} />
      <p className="mt-6">
        {locale === "id" ? "Belum punya akun" : "Don't have an account"}?{" "}
        <Link to="/register" className="underline">
          {locale === "id" ? "Daftar disini" : "Register here"}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
