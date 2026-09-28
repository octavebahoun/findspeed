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
    <section className="mx-auto max-w-5xl px-4 py-14">
      <p className="etiquette text-olive">Comment ça marche</p>
      <h2 className="font-titre mt-2 text-4xl font-bold">
        Trois gestes, zéro détour.
      </h2>
      <ol className="mt-8 grid gap-3 md:grid-cols-3">
        {ETAPES.map((etape) => (
          <li
            key={etape.numero}
            className="rounded-carte border border-bordure bg-blanc p-5"
          >
            <span className="font-titre text-4xl font-bold text-jaune [-webkit-text-stroke:1.5px_var(--color-encre)]">
              {etape.numero}
            </span>
            <h3 className="font-titre mt-2 text-2xl font-bold">
              {etape.titre}
            </h3>
            <p className="mt-1 text-gris">{etape.texte}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
