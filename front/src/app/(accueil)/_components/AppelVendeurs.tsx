import Link from "next/link";

const ARGUMENTS = [
  {
    titre: "Sans mot de passe",
    texte: "Vous vous connectez avec un code reçu sur WhatsApp.",
  },
  {
    titre: "Votre cabine, visible",
    texte:
      "Même au fond du marché, les clients vous trouvent depuis leur téléphone.",
  },
  {
    titre: "Gratuit pour la V1",
    texte: "Ajoutez vos produits et vos photos, sans frais pendant le pilote.",
  },
];

export default function AppelVendeurs() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="rounded-[20px] bg-jaune p-6 md:p-10">
        <div className="md:flex md:items-end md:justify-between md:gap-8">
          <div className="max-w-xl">
            <p className="etiquette text-olive">Vendeurs</p>
            <h2 className="font-titre mt-2 text-3xl font-bold md:text-4xl">
              Vous avez une cabine à PK3 ?
            </h2>
            <p className="mt-2">
              Mettez vos produits en ligne. La V1 démarre avec les vendeurs
              pilotes du marché de PK3.
            </p>
          </div>
          <Link
            href="/connexion"
            className="mt-6 inline-flex min-h-12 items-center rounded-carte bg-encre px-6 font-bold text-jaune transition-transform active:scale-95 md:mt-0"
          >
            Espace vendeur
          </Link>
        </div>

        <ul className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
          {ARGUMENTS.map((argument) => (
            <li
              key={argument.titre}
              className="rounded-carte border-2 border-encre p-4"
            >
              <h3 className="font-titre text-lg font-bold">{argument.titre}</h3>
              <p className="mt-1 text-sm">{argument.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
