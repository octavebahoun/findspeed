const ETAPES = [
  {
    numero: "01",
    titre: "Trouvez",
    texte: "Tapez le produit que vous cherchez : chaussures, sacs, jeans…",
  },
  {
    numero: "02",
    titre: "Localisez",
    texte: "La cabine qui le vend s'allume sur le plan du marché.",
  },
  {
    numero: "03",
    titre: "Achetez",
    texte: "Allez droit au vendeur, avec un prix indicatif en tête.",
  },
];

export default function Etapes() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <p className="etiquette text-olive">Comment ça marche</p>
      <h2 className="font-titre mt-2 max-w-xl text-4xl font-bold md:text-5xl">
        Trois gestes, zéro détour.
      </h2>

      <ol className="mt-10 grid gap-6 md:grid-cols-3 md:gap-4">
        {ETAPES.map((etape) => (
          <li
            key={etape.numero}
            className="relative border-l-4 border-encre pl-6 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4"
          >
            <span
              aria-hidden
              className="font-titre absolute -top-1 -left-3 flex size-9 items-center justify-center rounded-full bg-encre text-sm font-bold text-jaune md:relative md:top-0 md:left-0 md:size-auto md:rounded-none md:bg-transparent md:text-6xl md:text-encre"
            >
              {etape.numero}
            </span>
            <h3 className="font-titre mt-2 text-2xl font-bold md:mt-3">
              {etape.titre}
            </h3>
            <p className="mt-1 max-w-xs text-gris">{etape.texte}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
