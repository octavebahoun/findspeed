import AppelVendeurs from "./_components/AppelVendeurs";
import Etapes from "./_components/Etapes";
import Heros from "./_components/Heros";
import PiedDePage from "./_components/PiedDePage";
import Promesse from "./_components/Promesse";

export default function Accueil() {
  return (
    <>
      <Heros />
      <main className="flex-1">
        <Etapes />
        <Promesse />
        <AppelVendeurs />
      </main>
      <PiedDePage />
    </>
  );
}
