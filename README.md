# Work&Cancer Balance Suisse

Site web moderne pour Work&Cancer Balance Suisse - Coaching pour concilier travail et cancer.

## Stack technique

- **React 19** + **TypeScript** - Framework moderne et type-safe
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styling utility-first avec design tokens
- **Cloudflare Pages** - Hosting global avec serverless functions
- **Cloudflare D1** - Base de données SQLite serverless

## Développement local

```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm dev

# Build production
pnpm build

# Prévisualiser le build
pnpm preview
```

## Structure du projet

```
src/
├── components/        # Composants React
│   ├── Header.tsx    # Navigation sticky
│   ├── Footer.tsx    # Pied de page
│   ├── Hero.tsx      # Section hero
│   ├── About.tsx     # À propos
│   ├── Services.tsx  # Services proposés
│   ├── Approach.tsx  # Notre approche
│   ├── MemberSignup.tsx    # Formulaire membre
│   ├── ContactForm.tsx     # Formulaire contact
│   └── Volunteer.tsx       # Section bénévole
├── styles/
│   ├── globals.css         # Styles globaux
│   └── tokens/             # Design tokens CSS
├── App.tsx                 # Application principale
└── main.tsx                # Point d'entrée

functions/
└── api/                    # Cloudflare Functions
    ├── member-signup.ts    # POST /api/member-signup
    └── contact.ts          # POST /api/contact

public/
├── privacy.html            # Politique de confidentialité
├── terms.html              # Conditions d'utilisation
└── favicon.svg             # Favicon
```

## Déploiement sur Cloudflare Pages

1. Créer une base de données D1:
```bash
wrangler d1 create work-cancer-balance-db
```

2. Mettre à jour `wrangler.toml` avec le `database_id`

3. Déployer:
```bash
pnpm deploy
```

4. Configurer le domaine personnalisé dans le dashboard Cloudflare Pages

## Formulaires et base de données

Les formulaires envoient les données vers des Cloudflare Functions qui les stockent dans une base D1 (SQLite).

**Tables créées automatiquement:**
- `member_signups` - Inscriptions membres
- `contact_messages` - Messages de contact

## Personnalisation

### Couleurs
Modifiez `/src/styles/tokens/colors.css` pour ajuster la palette.

### Contenu
Le contenu est directement dans les composants React pour faciliter les modifications.

### Email du bénévolat
Changez l'email dans `/src/components/Volunteer.tsx`

## Support

Pour toute question technique, consultez la documentation:
- [Vite](https://vite.dev)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)
