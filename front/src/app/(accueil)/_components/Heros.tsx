import Link from "next/link";
import EnTete from "./EnTete";
import FormulaireRecherche from "./FormulaireRecherche";
import LegendePlan from "./LegendePlan";
import PlanApercu from "./PlanApercu";

export default function Heros() {
  return (
    <header className="bg-jaune">
      <EnTete />

      <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-12 pt-6 md:grid-cols-2 md:items-center md:pb-20">
        <div>
          <p className="etiquette animate-apparition text-olive">
            Marché de PK3 · Cotonou
          </p>
          <h1 className="font-titre mt-3 animate-apparition text-5xl font-bold leading-[0.95] [animation-delay:80ms] md:text-6xl">
            Le marché de PK3, à portée de clic.
          </h1>
          <p className="mt-4 animate-apparition text-lg font-bold italic [animation-delay:160ms]">
            « Trouvez. Localisez. Achetez. »
          </p>

          <FormulaireRecherche />

          <Link
            href="/plan"
            className="mt-4 inline-block animate-apparition text-sm font-bold underline underline-offset-4 [animation-delay:320ms]"
          >
            Ou parcourir le plan du marché →
          </Link>
        </div>

        <div className="animate-apparition rounded-[20px] bg-encre p-3 shadow-[0_20px_40px_-20px_rgb(26_27_29/0.6)] [animation-delay:200ms] md:rotate-1">
          <PlanApercu />
          <LegendePlan />
        </div>
      </div>
    </header>
  );
}
