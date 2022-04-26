import React from "react";
import AcmeInput from "../../Component/Input/Index";
import AcmeButton from "../../Component/Button/Index";

export default function SignupForm(props) {
  return (
    <div className=" flex flex-col w-full md:w-2/5  md:p-6 md:rounded-2xl md:bg-white md:drop-shadow">
      <AcmeInput
        placeholder="John Doe"
        title="Nama Lengkap"
        currChar="0"
        maxChar="40"
        helper=""
      />
      <AcmeInput
        placeholder="John Doe"
        title="Nomor Telepon"
        helper="Pilih kode negara, diikuti dengan nomor HPmu"
      />
      <AcmeInput
        placeholder="**********"
        title="Kata Sandi"
        currChar="0"
        maxChar="16"
        helper="Kata sandi harus mengandung 8-16 karakter, kombinasi huruf besar, huruf kecil, dan angka"
      />
      <AcmeButton>Submit</AcmeButton>
    </div>
  );
}
