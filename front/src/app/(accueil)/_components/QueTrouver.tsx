import Link from "next/link";

// Catégories montrées à titre d'exemple. La vraie liste viendra de
// l'API des catégories (voir S3 dans le cahier de tâches).
const CATEGORIES = [
  "Chaussures",
  "Sacs",
  "Jeans",
  "Robes",
  "Chemises",
  "T-shirts",
  "Vestes",
  "Ceintures",
  "Bijoux",
];

export default function QueTrouver() {
  return (
    <section className="bg-blanc">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="etiquette text-olive">Ce que vous pouvez trouver</p>
        <h2 className="font-titre mt-2 max-w-xl text-4xl font-bold md:text-5xl">
          Tout PK3 en une recherche.
        </h2>
        <p className="mt-3 max-w-md text-gris">
          Tapez ce que vous cherchez, ou parcourez les catégories du marché.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((categorie) => (
            <li key={categorie}>
              <Link
                href={{ pathname: "/recherche", query: { q: categorie } }}
                className="inline-block rounded-full border-2 border-encre bg-blanc px-4 py-2 text-sm font-bold transition-colors hover:bg-jaune"
              >
                {categorie}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
