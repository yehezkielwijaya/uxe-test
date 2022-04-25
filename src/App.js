import "./App.css";
import logo from "./Assets/img/logo.svg";
import BannerCard from "./Component/Card/Index";
import AcmeInput from "./Component/Input/Index";
import AcmeButton from "./Component/Button/Index";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 text-sm">
      <div className="bg-gray-100 w-iphone11pro min-w-fit p-4 pt-10 shadow-xl md:w-desktop md:h-full rounded">
        <img src={logo} className="w-1/3 md:w-32 mx-auto mb-8" alt="Acme Logo" />
        <div className="flex flex-col md:flex-row md:gap-9 md:justify-center md:align-middle">
          <BannerCard
            tag={"penting"}
            title={"Jasa Perancangan Website e-Commerce"}
            normalPrice={"Rp6.000.000"}
            discPrice={"Rp1.000.000"}
            time={"31 Desember 2022"}
          />
          <div className=" flex flex-col w-full md:w-2/5  md:p-6 md:rounded-2xl md:bg-white md:drop-shadow">
            <AcmeInput placeholder="John Doe" title="Nama Lengkap" currChar="0" maxChar="40" helper="" />
            <AcmeInput placeholder="John Doe" title="Nomor Telepon" helper="Pilih kode negara, diikuti dengan nomor HPmu" />
            <AcmeInput placeholder="**********" title="Kata Sandi" currChar="0" maxChar="16" helper="Kata sandi harus mengandung 8-16 karakter, kombinasi huruf besar, huruf kecil, dan angka" />
            <AcmeButton>Submit</AcmeButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
