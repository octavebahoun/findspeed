const PRODUITS = [
  { nom: "Baskets cuir", prix: "8 000 F", stock: "disponible", libelle: "Disponible" },
  { nom: "Sandales", prix: "3 500 F", stock: "peu", libelle: "Quelques pièces" },
  { nom: "Mocassins", prix: "6 000 F", stock: "rupture", libelle: "Rupture" },
] as const;

const PASTILLE = {
  disponible: "bg-disponible",
  peu: "bg-peu",
  rupture: "bg-rupture",
};

// Fiche cabine fictive, pour montrer le rendu sur la landing page.
export default function FicheExemple() {
  return (
    <article
      aria-label="Exemple de fiche cabine"
      className="rounded-[20px] bg-ardoise p-4"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="font-titre text-2xl font-bold text-jaune">
          Cabine B-124
        </h3>
        <span className="etiquette text-bordure-forte">Exemple</span>
      </div>
      <ul className="mt-3 grid gap-2">
        {PRODUITS.map((produit) => (
          <li
            key={produit.nom}
            className="flex items-center justify-between rounded-carte bg-ardoise-clair px-3 py-3"
          >
            <div>
              <p className="font-bold">{produit.nom}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-bordure-forte">
                <span
                  className={`size-2.5 rounded-full ${PASTILLE[produit.stock]}`}
                />
                {produit.libelle}
              </p>
            </div>
            <div className="text-right">
              <p className="font-titre text-xl font-bold">{produit.prix}</p>
              <p className="text-xs text-bordure-forte">prix indicatif</p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
