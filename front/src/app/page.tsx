import Image from "next/image";
import Link from "next/link";
import PlanApercu from "@/components/PlanApercu";

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

const PRODUITS_EXEMPLE = [
  { nom: "Baskets cuir", prix: "8 000 F", stock: "disponible", libelle: "Disponible" },
  { nom: "Sandales", prix: "3 500 F", stock: "peu", libelle: "Quelques pièces" },
  { nom: "Mocassins", prix: "6 000 F", stock: "rupture", libelle: "Rupture" },
] as const;

const PASTILLE = {
  disponible: "bg-disponible",
  peu: "bg-peu",
  rupture: "bg-rupture",
};

export default function Accueil() {
  return (
    <>
      {/* En-tête + héros sur fond jaune */}
      <header className="bg-jaune">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icone.png"
              alt=""
              width={36}
              height={36}
              className="rounded-icone"
              priority
            />
            <span className="font-titre text-2xl font-bold">findspeed</span>
          </Link>
          <Link
            href="/connexion"
            className="rounded-carte px-3 py-2 text-sm font-bold underline-offset-4 hover:underline"
          >
            Espace vendeur
          </Link>
        </nav>

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

            <form
              action="/recherche"
              className="mt-6 flex animate-apparition gap-2 [animation-delay:240ms]"
            >
              <label htmlFor="q" className="sr-only">
                Produit recherché
              </label>
              <input
                id="q"
                name="q"
                type="search"
                placeholder="Chaussures, sacs, jeans…"
                className="min-h-12 w-full rounded-carte border-2 border-encre bg-blanc px-4 text-base placeholder:text-gris focus:outline-none focus:ring-4 focus:ring-encre/20"
              />
              <button
                type="submit"
                className="min-h-12 shrink-0 rounded-carte bg-encre px-5 font-bold text-jaune transition-transform active:scale-95"
              >
                Chercher
              </button>
            </form>

            <Link
              href="/plan"
              className="mt-4 inline-block animate-apparition text-sm font-bold underline underline-offset-4 [animation-delay:320ms]"
            >
              Ou parcourir le plan du marché →
            </Link>
          </div>

          <div className="animate-apparition rounded-[20px] bg-encre p-3 shadow-[0_20px_40px_-20px_rgb(26_27_29/0.6)] [animation-delay:200ms] md:rotate-1">
            <PlanApercu />
            <div className="flex flex-wrap gap-x-4 gap-y-1 px-1 pt-3 text-xs text-blanc">
              <Legende couleur="bg-plan-cabine" texte="Cabine" />
              <Legende couleur="bg-plan-allee" texte="Allée" />
              <Legende couleur="bg-plan-toilettes" texte="Toilettes" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Comment ça marche */}
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

        {/* Bloc encre + aperçu d'une fiche cabine */}
        <section className="bg-encre text-blanc">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center">
            <div>
              <p className="etiquette text-jaune-vif">Notre promesse</p>
              <p className="font-titre mt-3 text-3xl font-bold leading-tight md:text-4xl">
                FindSpeed ne remplace pas le marché physique. Il le rend plus
                accessible, navigable et visible.
              </p>
              <p className="mt-4 text-bordure-forte">
                Même les cabines au fond du marché deviennent faciles à
                trouver.
              </p>
            </div>

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
                {PRODUITS_EXEMPLE.map((produit) => (
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
                      <p className="font-titre text-xl font-bold">
                        {produit.prix}
                      </p>
                      <p className="text-xs text-bordure-forte">
                        prix indicatif
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Appel aux vendeurs */}
        <section className="mx-auto max-w-5xl px-4 py-14">
          <div className="rounded-[20px] bg-jaune p-6 md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="etiquette text-olive">Vendeurs</p>
              <h2 className="font-titre mt-2 text-3xl font-bold md:text-4xl">
                Vous avez une cabine à PK3 ?
              </h2>
              <p className="mt-2 max-w-md">
                Mettez vos produits en ligne. Connexion avec votre numéro
                WhatsApp, sans mot de passe.
              </p>
            </div>
            <Link
              href="/connexion"
              className="mt-6 inline-flex min-h-12 items-center rounded-carte bg-encre px-6 font-bold text-jaune transition-transform active:scale-95 md:mt-0"
            >
              Espace vendeur
            </Link>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-4 pb-8">
        <p className="etiquette text-gris-clair">Excellence Team · FindSpeed</p>
      </footer>
    </>
  );
}

function Legende({ couleur, texte }: { couleur: string; texte: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className={`size-3 rounded-sm ${couleur}`} />
      {texte}
    </span>
  );
}
