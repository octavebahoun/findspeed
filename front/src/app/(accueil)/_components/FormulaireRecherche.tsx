export default function FormulaireRecherche() {
  return (
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
  );
}
