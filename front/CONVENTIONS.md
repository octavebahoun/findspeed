# Règles du front FindSpeed

Ces règles sont **obligatoires**. Une PR qui ne les respecte pas est refusée.

## 1. Une page = un dossier

Chaque page vit dans son propre dossier sous `src/app/`, même la page d'accueil.

```
src/app/
├── layout.tsx              # coquille commune (polices, service worker)
├── globals.css             # jetons du système de design (voir DESIGN.md)
├── (accueil)/              # page « / » (les parenthèses n'apparaissent pas dans l'URL)
│   ├── page.tsx
│   └── _components/
├── plan/
│   ├── page.tsx
│   └── _components/
├── cabines/[code]/
│   ├── page.tsx
│   └── _components/
└── …
```

## 2. Les composants d'une page restent dans sa page

- Les composants d'une page vont dans `_components/` **à côté de son `page.tsx`**.
- Le `_` empêche Next.js d'en faire une route.
- Une page n'importe **jamais** un composant depuis le dossier d'une autre page.

## 3. Composants partagés : seulement quand c'est vraiment partagé

- Un composant va dans `src/components/` **uniquement** quand au moins deux pages s'en servent.
- On le déplace à ce moment-là, pas avant.

## 4. Ultra modulaire

- **Un composant par fichier**, et le fichier porte le nom du composant (`Heros.tsx` → `Heros`).
- **`page.tsx` ne fait qu'assembler** des sections : pas de gros bloc de HTML dedans.
- Un composant qui dépasse ~100 lignes ou fait deux choses est découpé.
- Les données fixes d'un composant (listes, libellés) sont déclarées en haut de son fichier.

## 5. Nommage

- Composants en `PascalCase`, en français : `FicheExemple`, `AppelVendeurs`.
- Dossiers de routes en minuscules : `plan`, `connexion`.

## 6. Design

- Couleurs, polices, arrondis : **uniquement les jetons** de `globals.css` (`bg-jaune`, `text-encre`, `rounded-carte`…).
- Jamais de couleur en hexadécimal dans un composant.
- Détails et contrastes dans [DESIGN.md](DESIGN.md).

## Exemple : la page d'accueil

```
(accueil)/
├── page.tsx                 # assemble Heros, Etapes, Promesse, AppelVendeurs, PiedDePage
└── _components/
    ├── Heros.tsx            # utilise EnTete, FormulaireRecherche
    ├── EnTete.tsx
    ├── FormulaireRecherche.tsx
    ├── Etapes.tsx
    ├── Promesse.tsx         # utilise FicheExemple
    ├── FicheExemple.tsx
    ├── AppelVendeurs.tsx
    └── PiedDePage.tsx
```
