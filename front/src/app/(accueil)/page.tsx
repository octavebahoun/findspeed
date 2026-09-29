import AppelVendeurs from "./_components/AppelVendeurs";
import Etapes from "./_components/Etapes";
import Heros from "./_components/Heros";
import PiedDePage from "./_components/PiedDePage";
import Promesse from "./_components/Promesse";
import QueTrouver from "./_components/QueTrouver";

export default function Accueil() {
  return (
    <>
      <Heros />
      <main className="flex-1">
        <Etapes />
        <QueTrouver />
        <Promesse />
        <AppelVendeurs />
      </main>
      <PiedDePage />
    </>
  );
}
