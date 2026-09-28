# Système de design FindSpeed

Tiré de la présentation « FindSpeed – ANaGeM » (Excellence Team, 2026).
Les jetons vivent dans `src/app/globals.css` (bloc `@theme` de Tailwind) : on les utilise par leur nom (`bg-jaune`, `text-encre`…), jamais en valeur hexadécimale dans les composants.

## Principes

1. **Jaune et encre.** Le jaune domine, l'encre porte le texte et les blocs forts. Le reste est neutre.
2. **Lisible en plein soleil.** Le client est debout au marché, téléphone en main : fond clair, gros contrastes, textes courts.
3. **Léger.** Réseau faible à PK3 : polices système pour le texte, peu d'images décoratives.

## Couleurs

### Marque

| Jeton | Valeur | Usage |
| --- | --- | --- |
| `jaune` | `#FFD21B` | Couleur dominante : bandeau, bouton principal, cabine sur le plan |
| `jaune-vif` | `#FFB800` | Étiquettes et puces **sur fond sombre uniquement** |
| `olive` | `#5B4C00` | Texte d'accent sur fond clair ou jaune (remplace `jaune-vif` sur clair) |

### Neutres

| Jeton | Valeur | Usage |
| --- | --- | --- |
| `encre` | `#1A1B1D` | Texte principal, texte sur jaune, blocs sombres |
| `ardoise` | `#24282B` | Surfaces sombres (écran type « téléphone » de la présentation) |
| `ardoise-clair` | `#2E3336` | Cartes posées sur `ardoise` |
| `gris` | `#5A5A55` | Texte secondaire |
| `gris-clair` | `#8B8D8A` | Légendes, pied de page : jamais pour une info essentielle |
| `bordure-forte` | `#B9B9B4` | Séparateurs visibles, bordures sur fond sombre |
| `bordure` | `#E7E3D8` | Bordures des cartes sur fond clair |
| `creme` | `#FFFDF7` | Fond de page |
| `blanc` | `#FFFFFF` | Cartes sur fond crème, texte sur `ardoise` |

### Stock d'un produit

Comme dans la présentation : une pastille de couleur **suivie du mot** en `encre`. La couleur n'est jamais seule.

| Jeton | Valeur | Libellé |
| --- | --- | --- |
| `disponible` | `#1F9D55` | Disponible |
| `peu` | `#E8850C` | Quelques pièces |
| `rupture` | `#D93A2B` | Rupture |

### Plan du marché (validé)

L'Excel source code les cases en jaune (cabine), vert (allée) et rouge (toilettes). Sur l'app, le vert et le rouge sont déjà pris par le stock, donc le plan utilise :

| Jeton | Valeur | Élément |
| --- | --- | --- |
| `plan-cabine` | `#FFD21B` | Cabine (cabine sélectionnée : fond `encre`, texte `jaune`) |
| `plan-allee` | `#E7E3D8` | Allée |
| `plan-toilettes` | `#3B82C4` | Toilettes |

### Contrastes vérifiés (WCAG)

| Texte / fond | Ratio | Verdict |
| --- | --- | --- |
| `encre` / `creme` | 16,9 | OK partout |
| `encre` / `jaune` | 11,9 | OK partout |
| `gris` / `creme` | 6,8 | OK partout |
| `olive` / `jaune` | 5,8 | OK partout |
| `jaune-vif` / `encre` | 9,9 | OK partout |
| `gris-clair` / `creme` | 3,3 | Gros texte (≥ 18 px) ou décor seulement |
| `jaune-vif` / `creme` | 1,7 | **Interdit** en texte |

## Typographie

| Rôle | Police | Jeton | Réglage |
| --- | --- | --- | --- |
| Titres | Barlow Semi Condensed 600/700 (équivalent web de la Bahnschrift SemiCondensed de la présentation) | `font-titre` | Gras, serré |
| Texte | Arial, Helvetica (comme la présentation, rien à télécharger) | `font-sans` | Normal |
| Étiquette de section | Arial gras | utilitaire `etiquette` | Majuscules, espacement 0,2 em, ex. « 05 · LE CONCEPT » |

Tailles sur mobile : titre de page `text-3xl`, titre de bloc `text-xl`, texte `text-base`, légende `text-sm`. Pas de texte informatif sous 14 px.

## Formes et espacement

- Coins : `rounded-carte` (10 px) pour cartes et boutons ; `rounded-full` pour les pastilles.
- Icône et logo : coins à 22 % (`rounded-icone`), comme l'icône de l'app.
- Marges : 16 px sur les côtés (`px-4`), 12 px entre deux cartes (`gap-3`).
- Zone tactile minimale : 44 × 44 px.
- Pas d'ombres lourdes : une carte se distingue par sa bordure `bordure` ou son fond `blanc`.

## Motifs repris de la présentation

- **Bloc encre** : fond `encre`, texte `blanc`, pour un message clé (ex. « FindSpeed est une plateforme… »).
- **Étiquette de section** en `olive` sur clair, `jaune-vif` sur sombre.
- **Pied discret** : « EXCELLENCE TEAM · FINDSPEED » en `etiquette` + `gris-clair`.
- **Slogan** : « Trouvez. Localisez. Achetez. » en italique gras.

## Logo et icônes

| Fichier | Usage |
| --- | --- |
| `public/logo.png` | Logo complet (icône + « findspeed ») |
| `public/logo-icone.png` | Icône seule |
| `public/icon-192.png`, `icon-512.png` | Icônes PWA |
| `public/icon-maskable-*.png` | Icônes PWA Android (fond jaune, marge de sécurité) |
| `src/app/icon.png`, `apple-icon.png` | Onglet du navigateur, écran d'accueil iPhone |

⚠️ Ces fichiers viennent de la présentation (286 px de large). Il faut le **fichier original du logo en haute définition** pour avoir une icône 512 px nette.
