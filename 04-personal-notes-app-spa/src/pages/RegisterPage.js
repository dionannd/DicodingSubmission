import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputRegister from "../components/InputRegister";
import { register } from "../utils/api";

function RegisterPage({ locale }) {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);

    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="">
      <h2 className="block mb-6 text-xl font-bold">
        {locale === "id"
          ? "Isi form untuk membuat akun anda"
          : "Fill in the form to create an account"}
      </h2>
      <InputRegister register={onRegisterHandler} />
      <p className="mt-6">
        {locale === "id" ? "Sudah punya akun" : "Already have an account"}?{" "}
        <Link to="/" className="underline">
          {locale === "id" ? "Login disini" : "Login here"}
        </Link>
      </p>
    </section>
  );
}

export default RegisterPage;
