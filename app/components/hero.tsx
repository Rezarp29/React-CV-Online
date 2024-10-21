"use client"; // Pastikan menggunakan "use client"

import { useState } from "react";
import foto from "../reza.jpg";
import FavoriteColor from "./FavoriteColor";
import "../style-abi.css";

const Profile: React.FC<{ borderColor: string }> = ({ borderColor }) => {
  return (
    <img
      src={foto.src}
      alt="Reza Rahmadi Profile Picture"
      className="fotoku"
      style={{
        borderRadius: "50%",
        border: `5px solid ${borderColor}`, // Border lingkaran sesuai dengan warna yang dipilih
        width: "200px",
        height: "200px",
      }}
    />
  );
};

const Hero: React.FC = () => {
  const [borderColor, setBorderColor] = useState<string>("blue"); // Warna default biru

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col items-center justify-start p-5">
      <div className="container rounded-lg shadow-lg">
        <header className="mb-6 text-center">
          <h1 className="text-gray-300 font-bold text-4xl">CV ONLINE</h1>
          <h2 className="text-3xl mt-2">Reza Rahmadi Putra</h2>
        </header>

        {/* Profile dengan border color yang dinamis */}
        <Profile borderColor={borderColor} />

        <article className="text-lg leading-relaxed text-center">
          <p className="mb-4">
            Nama saya Reza Rahmadi Putra. Saya Seorang Mahasiswa Jurusan Sistem Informasi Semester 5 Dari Universitas
            Ma'soem.
          </p>
          <p className="font-semibold">Saya bercita-cita sebagai programer saja.</p>
        </article>

        {/* Komponen FavoriteColor */}
        <FavoriteColor onColorChange={setBorderColor} />

        <footer className="mt-8 text-center">
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded transition duration-300">
            Hubungi Saya
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Hero;
