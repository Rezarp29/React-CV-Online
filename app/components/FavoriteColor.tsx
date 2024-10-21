"use client"; // Pastikan menggunakan "use client"

import { useState } from "react";

interface FavoriteColorProps {
  onColorChange: (color: string) => void; // Prop untuk mengirimkan warna ke komponen lain
}

const FavoriteColor: React.FC<FavoriteColorProps> = ({ onColorChange }) => {
  // Inisialisasi warna default dengan warna biru
  const [color, setColor] = useState<string>("blue");

  // Daftar warna yang tersedia
  const colors = ["red", "yellow", "blue", "purple", "green"];

  return (
    <div className="color-container" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Pilih Warna Favorit Kamu</h1>

      {/* Pilihan warna */}
      <div className="color-options" style={{ marginTop: "10px" }}>
        {colors.map((colorOption) => (
          <button
            key={colorOption}
            onClick={() => {
              setColor(colorOption); // Mengubah warna sesuai dengan pilihan
              onColorChange(colorOption); // Mengirimkan warna ke komponen lain
            }}
            style={{
              backgroundColor: colorOption,
              padding: "10px 20px",
              margin: "0 5px",
              borderRadius: "5px",
              color: "#fff",
              cursor: "pointer",
              border: "none",
            }}
          >
            {colorOption.charAt(0).toUpperCase() + colorOption.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FavoriteColor;
