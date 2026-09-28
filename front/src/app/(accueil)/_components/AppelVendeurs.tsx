import Link from "next/link";

export default function AppelVendeurs() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <div className="rounded-[20px] bg-jaune p-6 md:flex md:items-center md:justify-between md:p-10">
        <div>
          <p className="etiquette text-olive">Vendeurs</p>
          <h2 className="font-titre mt-2 text-3xl font-bold md:text-4xl">
            Vous avez une cabine à PK3 ?
          </h2>
          <p className="mt-2 max-w-md">
            Mettez vos produits en ligne. Connexion avec votre numéro WhatsApp,
            sans mot de passe.
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
  );
}
