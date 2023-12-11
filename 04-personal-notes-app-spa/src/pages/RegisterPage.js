import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/InputRegister";
import { register } from "../utils/api";

function RegisterPage() {
  async function onRegisterHandler(user) {
    await register(user);
  }

  return (
    <section className="">
      <h2>Isi form untuk membuat akun anda</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Sudah punya akun? <Link to="/">Login disini</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
