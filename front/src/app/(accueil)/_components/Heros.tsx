import Image from "next/image";
import Link from "next/link";
import EnTete from "./EnTete";
import FormulaireRecherche from "./FormulaireRecherche";

export default function Heros() {
  return (
    <header className="relative isolate overflow-hidden bg-blanc">
      {/* Photo du hangar de PK3, en arrière-plan */}
      <Image
        src="/images/pk3-hangar.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      {/* Remplissage blanc : plein sous le texte, s'efface vers la droite */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blanc from-55% via-blanc/60 via-65% to-transparent to-80% md:bg-linear-to-r md:from-35% md:via-blanc/75 md:via-50% md:to-80%" />

      <EnTete />

      <div className="mx-auto flex min-h-[680px] max-w-5xl flex-col px-4 pb-16 pt-8 md:min-h-[560px] md:justify-center md:pt-4">
        <div className="max-w-lg">
          <p className="etiquette animate-apparition text-olive">
            Marché de PK3 · Cotonou
          </p>
          <h1 className="font-titre mt-3 animate-apparition text-5xl font-bold leading-[0.95] [animation-delay:80ms] md:text-6xl">
            Le marché de PK3,{" "}
            <span className="bg-jaune box-decoration-clone px-1 md:whitespace-nowrap">
              à portée de clic.
            </span>
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
