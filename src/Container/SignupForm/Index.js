import React from "react";
import BaseInput from "../../Component/Input/Index";
import AcmeButton from "../../Component/Button/Index";
import { useState, useEffect } from "react";
import { useToast } from "../../Hooks/useToast.js";

export default function SignupForm(props) {
  const initialValues = {
    name: "",
    phone: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const toast = useToast(4000);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      toast("success", "Data berhasil disimpan");
    }
  }, [formErrors, formValues, isSubmit, toast]);

  const validate = (values) => {
    const errors = {};
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if (!values.name) {
      errors.name = "Nama lengkap tidak boleh kosong";
    } else if (values.name.length < 3) {
      errors.name = "Nama terlalu pendek";
    } else if (values.name.length > 40) {
      errors.name = "Nama terlalu panjang";
    }
    if (!values.phone) {
      errors.phone = "Nomor telepon tidak boleh kosong";
    } else if (isNaN(values.phone)) {
      errors.phone = "Nomor telepon hanya boleh berupa angka";
    } else if (values.phone.length > 16) {
      errors.name = "Nomor telepon tidak valid";
    }
    if (!values.password) {
      errors.password = "Kata Sandi tidak boleh kosong";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Kata sandi harus mengandung 8-16 karakter, kombinasi huruf besar, huruf kecil, dan angka";
    }
    return errors;
  };

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className=" flex relative flex-col w-full md:w-[391px] md:min-w-[391px] md:p-6 md:rounded-2xl md:bg-white md:drop-shadow"
      >
        <BaseInput
          value={formValues.name}
          onChange={handleOnChange}
          type="text"
          name="name"
          label="Nama Lengkap"
          maxLength="40"
          minLength="3"
          placeholder="John Doe"
          helper={
            formErrors.name !== "" ? (
              <span className="text-red-500">{formErrors.name}</span>
            ) : (
              ""
            )
          }
        ></BaseInput>
        <BaseInput
          value={formValues.phone}
          onChange={handleOnChange}
          type="tel"
          name="phone"
          label="Nomor Telepon"
          placeholder="81908009190"
          maxLength="16"
          minLength=""
          helper={
            formErrors.phone !== "" && isSubmit ? (
              <span className="text-red-500">{formErrors.phone}</span>
            ) : (
              "Pilih kode negara, diikuti dengan nomor HPmu"
            )
          }
        ></BaseInput>
        <BaseInput
          value={formValues.password}
          onChange={handleOnChange}
          type="password"
          name="password"
          label="Kata Sandi"
          placeholder="Masukkan kata sandi"
          maxLength="16"
          minLength="8"
          helper={
            formErrors.password !== "" && isSubmit ? (
              <span className="text-red-500">{formErrors.password}</span>
            ) : (
              "Kata sandi harus mengandung 8-16 karakter kombinasi huruf besar, huruf kecil, dan angka"
            )
          }
        ></BaseInput>

        <AcmeButton>submit</AcmeButton>
      </form>
    </>
  );
}
