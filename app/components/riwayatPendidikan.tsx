interface EducationRowProps {
    level: string;
    school: string;
    years: string;
  }
  
  const EducationRow: React.FC<EducationRowProps> = ({ level, school, years }) => {
    return (
      <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-700 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1 text-center">
            <div className="col-span-12 md:col-span-3 text-white font-semibold">{level}</div>
            <div className="col-span-12 md:col-span-6 text-white">{school}</div>
            <div className="col-span-12 md:col-span-3 text-white">{years}</div>
          </div>
        </div>
      </div>
    );
  };
  
  const RiwayatPendidikan: React.FC = () => {
    return (
      <section className="bg-gray-800 p-5 w-full rounded-lg shadow-lg">
        <div className="container mx-auto p-2 text-left pt-10">
          <h2 className="text-2xl text-white font-bold text-center">Riwayat Pendidikan</h2>
          <EducationRow level="SD" school="SDN KORPRI" years="2010-2016" />
          <EducationRow level="SMP" school="SMPN 37 Bandung" years="2016-2019" />
          <EducationRow level="SMK" school="SMKS BPP Bandung" years="2019-2022" />
        </div>
      </section>
    );
  };
  
  export default RiwayatPendidikan;
  