interface PekerjaanRowProps {
    tahun: string;
    instansi: string;
    jb: string;
  }
  
  const PekerjaanRow: React.FC<PekerjaanRowProps> = ({ tahun, instansi, jb }) => {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-700 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1 text-center">
            <div className="col-span-12 md:col-span-3 text-white font-semibold">{tahun}</div>
            <div className="col-span-12 md:col-span-6 text-white">{instansi}</div>
            <div className="col-span-12 md:col-span-3 text-white">{jb}</div>
          </div>
        </div>
      </div>
    );
  };
  
  const RiwayatPekerjaan: React.FC = () => {
    return (
      <section className="bg-gray-800 p-5 w-full rounded-lg shadow-lg">
        <div className="container mx-auto p-2 text-left pt-10">
          <h2 className="text-2xl text-white font-bold text-center">Riwayat Pekerjaan</h2>
          <PekerjaanRow tahun="2010-2015" instansi="PT. Mayora Indah Tbk" jb="Marketing Specialist" />
          <PekerjaanRow tahun="2015-2017" instansi="PT. Gudang Garam Tbk" jb="Marketing Manager" />
          <PekerjaanRow tahun="2017-2021" instansi="PT. Indofood Sukses Makmur Tbk" jb="Director of Human Resources" />
          <PekerjaanRow tahun="2021-sekarang" instansi="Trafigura Group Singapura" jb="Chief Marketing Officer" />
        </div>
      </section>
    );
  };
  
  export default RiwayatPekerjaan;
  