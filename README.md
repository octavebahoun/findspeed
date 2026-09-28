# FindSpeed

Trouver un produit dans un marché, et la cabine qui le vend, en quelques secondes.

**V1 : marché de PK3, mise en ligne le 31 octobre 2026.** Ganhi viendra ensuite, après le relevé terrain.

## Fonctionnalités V1

- Recherche de produit par nom ou par catégorie
- Plan interactif du marché avec les cabines
- Fiche cabine : vendeur, produits, prix indicatifs
- Connexion vendeur par code WhatsApp
- Ajout et gestion des produits par le vendeur
- Validation des vendeurs par un admin

Hors V1 : QR codes, statistiques, bots WhatsApp.

## Stack

| Partie | Techno |
| --- | --- |
| Back | Laravel 12, PostgreSQL, auth Sanctum |
| Front | Next.js en PWA (Serwist) |
| Plan | Konva, positions en grille (x, y) |
| Hébergement | Serveur AWS existant (front, back et photos) |

## Schéma de données

| Table | Colonnes | Règles |
| --- | --- | --- |
| `marches` | id, nom, ville | |
| `cabines` | id, marche_id, code, x, y, type | code sans espaces, unique par marché |
| `vendeurs` | id, user_id, nom, telephone, cabine_id | cabine_id unique : une cabine, un vendeur |
| `produits` | id, vendeur_id, categorie_id, nom, prix, photo, en_stock | prix obligatoire, affiché « prix indicatif » |
| `categories` | id, nom, parent_id | hiérarchie, ex. Sacs > Sacs de voyage |
| `users` | id, telephone, role | telephone unique ; rôles `vendeur`, `admin` |

Couleurs de l'Excel source du plan : **jaune** = cabine, **vert** = allée, **rouge** = toilettes.

## Connexion

- Code OTP à 6 chiffres envoyé par WhatsApp
- Valable 5 minutes, 5 essais maximum
- Session Sanctum de 30 jours

## Équipe

| Personne | Rôle |
| --- | --- |
| Octave BAHOUN | DT, architecture, frontend |
| COSME | Backend |
| FOLARIN Mourchid | Terrain, renfort backend |
| Hubert SOSSOU-AGBO | Terrain |
| VINONFODO Jean-Baptiste | Sécurité, CI/CD |

## Planning

Le planning semaine par semaine est dans le [cahier de tâches Notion](https://buttoned-crowberry-bb0.notion.site/FindSpeed-V1-Cahier-de-t-ches-3e57e9c54aad81079163e85cabd9bf4d).

## Lancer le front

Avant de coder : lire [front/CONVENTIONS.md](front/CONVENTIONS.md) (règles obligatoires) et [front/DESIGN.md](front/DESIGN.md) (système de design).

```bash
cd front
npm install
npm run dev     # développement (service worker désactivé)
npm run build   # build Next.js + génération du service worker (Serwist)
npm start
```
