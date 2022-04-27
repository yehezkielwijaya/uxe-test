import React from "react";
import logo from "../../Assets/img/logo.svg";
import BannerCard from "../../Component/Card/Index";
import SignupForm from "../../Container/SignupForm/Index";

export default function HomePage() {
  return (
    <div className="bg-gray-100 w-iphone11pro min-w-fit p-4 pt-10 shadow-xl rounded-xl md:w-desktop md:min-h-fit md:h-full md:p-8 ">
      <img src={logo} className="w-1/3 md:w-32 md:h-7 mx-auto mb-8" alt="Acme Logo" />
      <div className="flex flex-col md:flex-row md:gap-9 md:justify-center md:align-middle">
        <BannerCard
          tag={"penting"}
          title={"Jasa Perancangan Website e-Commerce"}
          normalPrice={"Rp6.000.000"}
          discPrice={"Rp1.000.000"}
          time={"31 Desember 2022"}
        />
        <SignupForm />
      </div>
    </div>
  );
}
