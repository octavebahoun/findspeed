const ELEMENTS = [
  { couleur: "bg-plan-cabine", texte: "Cabine" },
  { couleur: "bg-plan-allee", texte: "Allée" },
  { couleur: "bg-plan-toilettes", texte: "Toilettes" },
];

export default function LegendePlan() {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 px-1 pt-3 text-xs text-blanc">
      {ELEMENTS.map(({ couleur, texte }) => (
        <span key={texte} className="flex items-center gap-1.5">
          <span className={`size-3 rounded-sm ${couleur}`} />
          {texte}
        </span>
      ))}
    </div>
  );
}
