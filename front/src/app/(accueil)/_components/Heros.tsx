import Image from "next/image";
import Link from "next/link";
import EnTete from "./EnTete";
import FormulaireRecherche from "./FormulaireRecherche";

export default function Heros() {
  return (
    <header className="relative isolate overflow-hidden bg-jaune">
      {/* Photo du hangar de PK3, en arrière-plan plein cadre */}
      <Image
        src="/images/pk3-hangar.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />

      {/* Voile sombre par-dessus la photo (téléphone), pour la lisibilité du texte */}
      <div className="absolute inset-0 -z-10 bg-encre/55 md:hidden" />

      {/* Diagonale jaune qui coupe la photo (ordinateur) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[62%] bg-jaune [clip-path:polygon(0_0,100%_0,78%_100%,0_100%)] md:block" />

      <EnTete />

      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-8 md:min-h-[560px] md:pb-16 md:pt-32">
        <div className="max-w-lg text-blanc md:text-encre">
          <p className="etiquette animate-apparition text-jaune-vif md:text-olive">
            Marché de PK3 · Cotonou
          </p>
          <h1 className="font-titre mt-3 animate-apparition text-5xl font-bold leading-[0.95] [animation-delay:80ms] md:text-6xl">
            Le marché de PK3,{" "}
            <span className="md:whitespace-nowrap">à portée de clic.</span>
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
      </div>
    </header>
  );
}
