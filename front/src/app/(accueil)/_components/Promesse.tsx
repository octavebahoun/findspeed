import FicheExemple from "./FicheExemple";

export default function Promesse() {
  return (
    <section className="bg-encre text-blanc">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="etiquette text-jaune-vif">Notre promesse</p>
          <p className="font-titre mt-3 text-3xl font-bold leading-tight md:text-4xl">
            FindSpeed ne remplace pas le marché physique. Il le rend plus
            accessible, navigable et visible.
          </p>
          <p className="mt-4 text-bordure-forte">
            Même les cabines au fond du marché deviennent faciles à trouver.
          </p>
        </div>
        <FicheExemple />
      </div>
    </section>
  );
}
