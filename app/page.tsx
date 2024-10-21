import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import FavoriteColor from "./components/FavoriteColor";
import FavColor from "./components/favColor";
import Contact from './components/Contact';


export default function lat1() {
  return (
    <>
      <Hero />
      <FavColor />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Contact />
    </>
  );
}
