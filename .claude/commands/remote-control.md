# /remote-control — Pilotage complet de SiteFinox 2.0

Tu es en mode **remote-control** pour le projet **SiteFinox 2.0** — site statique Next.js 16 déployé sur Cloudflare Pages.

## Contexte du projet

- **Stack** : Next.js 16 (static export `out/`), Tailwind CSS 3, Framer Motion 11, TypeScript strict
- **Déploiement** : chaque push sur `main` déclenche automatiquement un build Cloudflare Pages
- **Branche courante** : `claude/remote-control-yPHxo` → merge vers `main` pour déployer
- **Repo** : `evanjuteau/SiteFinox2.0`

## Ce que tu dois faire au lancement

1. Affiche l'état du projet :
   - `git status` + `git log --oneline -5`
   - Résume ce qui a changé récemment
2. Propose les actions disponibles selon l'argument passé (voir ci-dessous)

## Actions disponibles

### `/remote-control` (sans argument)
Affiche un tableau de bord :
- État git (branche, fichiers modifiés, commits en avance sur main)
- Dernière version déployée (dernier commit sur `main`)
- Rappel des fichiers de contenu à modifier

### `/remote-control status`
État détaillé : git diff, lint rapide (`npm run lint`), liste des composants modifiés.

### `/remote-control build`
Lance `npm run build` et rapporte :
- Succès ou erreurs TypeScript/build
- Taille des pages générées dans `out/`

### `/remote-control deploy`
Workflow complet de déploiement :
1. Lance `npm run lint` — arrête si erreurs
2. Lance `npm run build` — arrête si erreurs
3. Stage tous les fichiers modifiés
4. Crée un commit avec message descriptif
5. Push sur la branche courante
6. Merge vers `main` (ou crée une PR si demandé)
7. Confirme que le push sur `main` a déclenché le déploiement Cloudflare

### `/remote-control improve <description>`
Mode développement ciblé :
- Lit les fichiers concernés par `<description>`
- Propose un plan de modification précis avant d'agir
- Implémente les changements
- Vérifie avec un build si applicable

### `/remote-control content`
Affiche les fichiers de contenu à personnaliser :
- `src/lib/articles.ts` — Chroniques
- `src/components/sections/Equipe.tsx` — Équipe
- `src/components/sections/Histoire.tsx` — Timeline
- `src/components/sections/Parcours.tsx` — Étapes parcours de vie
- `src/lib/projects.ts` — Projets
- `src/lib/services.ts` — Services
- `src/lib/site.ts` — Infos du site (nom, SEO, coordonnées)

## Règles

- Ne jamais push directement sur `main` sans un build réussi
- Toujours valider TypeScript (`npm run build`) avant de déployer
- Commits en français, messages descriptifs et concis
- Garder le style du projet : Playfair Display pour les titres, Inter pour le corps, Bebas Neue pour les accents

## $ARGUMENTS

L'argument passé à la commande : `$ARGUMENTS`

Adapte ton comportement en fonction. Si vide, affiche le tableau de bord par défaut.
