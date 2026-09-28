// Aperçu décoratif du plan : trois rangées de cabines, une cabine trouvée
// et le chemin depuis l'entrée. Les vraies données viendront de l'API.

const LARGEUR = 38;
const HAUTEUR = 34;
const BLOCS_X = [16, 120, 224];
const RANGEES = [0, 1, 2, 3, 4];

const TROUVEE = { bloc: 1, colonne: 1, rangee: 1 };
const TOILETTES = { bloc: 2, colonne: 1, rangee: 4 };

function position(bloc: number, colonne: number, rangee: number) {
  return { x: BLOCS_X[bloc] + colonne * (LARGEUR + 4), y: 16 + rangee * 40 };
}

export default function PlanApercu() {
  const trouvee = position(TROUVEE.bloc, TROUVEE.colonne, TROUVEE.rangee);

  return (
    <svg
      viewBox="0 0 320 250"
      role="img"
      aria-label="Plan du marché : la cabine B-124 est signalée"
      className="w-full h-auto"
    >
      <rect width="320" height="250" rx="16" className="fill-plan-allee" />

      {BLOCS_X.map((_, bloc) =>
        [0, 1].map((colonne) =>
          RANGEES.map((rangee) => {
            const { x, y } = position(bloc, colonne, rangee);
            const estTrouvee =
              bloc === TROUVEE.bloc &&
              colonne === TROUVEE.colonne &&
              rangee === TROUVEE.rangee;
            const estToilettes =
              bloc === TOILETTES.bloc &&
              colonne === TOILETTES.colonne &&
              rangee === TOILETTES.rangee;
            if (estTrouvee) return null;
            return (
              <rect
                key={`${bloc}-${colonne}-${rangee}`}
                x={x}
                y={y}
                width={LARGEUR}
                height={HAUTEUR}
                rx="4"
                className={
                  estToilettes ? "fill-plan-toilettes" : "fill-plan-cabine"
                }
              />
            );
          }),
        ),
      )}

      {/* Chemin « Me guider » depuis l'entrée */}
      <path
        d={`M212 250 V${trouvee.y + HAUTEUR / 2} H${trouvee.x + LARGEUR}`}
        className="fill-none stroke-encre"
        strokeWidth="3"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />

      {/* Cabine trouvée */}
      <rect
        x={trouvee.x}
        y={trouvee.y}
        width={LARGEUR}
        height={HAUTEUR}
        rx="4"
        className="fill-none stroke-encre animate-signal"
        strokeWidth="3"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <rect
        x={trouvee.x}
        y={trouvee.y}
        width={LARGEUR}
        height={HAUTEUR}
        rx="4"
        className="fill-encre"
      />
      <text
        x={trouvee.x + LARGEUR / 2}
        y={trouvee.y + HAUTEUR / 2 + 4}
        textAnchor="middle"
        className="fill-jaune font-titre text-[11px] font-bold"
      >
        B-124
      </text>
    </svg>
  );
}
