# Guide de déploiement Cloudflare Pages

## Prérequis

- Compte Cloudflare (gratuit)
- `wrangler` CLI installé (déjà dans les dépendances)

## Étapes de déploiement

### 1. Créer la base de données D1

```bash
# Se connecter à Cloudflare
npx wrangler login

# Créer la base de données
npx wrangler d1 create work-cancer-balance-db
```

Copiez le `database_id` fourni et mettez-le à jour dans `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "work-cancer-balance-db"
database_id = "VOTRE_DATABASE_ID_ICI"
```

### 2. Déployer le site

```bash
# Build et déploiement
pnpm deploy
```

Ou manuellement:

```bash
# Build
pnpm build

# Déployer
npx wrangler pages deploy dist --project-name work-cancer-balance
```

### 3. Configuration du domaine

1. Allez sur le [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Naviguez vers **Pages** → **work-cancer-balance**
3. Cliquez sur **Custom domains**
4. Ajoutez `workcancerbalance.com` et `www.workcancerbalance.com`

### 4. Lier la base de données au projet

Dans le dashboard Cloudflare Pages:

1. Allez dans **Settings** → **Functions**
2. Sous **D1 database bindings**, ajoutez:
   - Variable name: `DB`
   - D1 database: `work-cancer-balance-db`

### 5. Vérifier le déploiement

Votre site sera accessible à:
- URL temporaire Cloudflare: `work-cancer-balance.pages.dev`
- Votre domaine: `workcancerbalance.com`

## Tests des formulaires

Une fois déployé, testez:

1. **Formulaire membre**: `/api/member-signup`
2. **Formulaire contact**: `/api/contact`
3. **Lien bénévole**: mailto fonctionne automatiquement

## Vérifier les soumissions

```bash
# Se connecter à la base de données
npx wrangler d1 execute work-cancer-balance-db --command "SELECT * FROM member_signups"
npx wrangler d1 execute work-cancer-balance-db --command "SELECT * FROM contact_messages"
```

## Mises à jour futures

Pour mettre à jour le site:

```bash
# Faire vos changements de code
pnpm dev  # Tester localement

# Déployer
pnpm deploy
```

Cloudflare déploie automatiquement avec:
- HTTPS automatique
- CDN global
- Déploiements atomiques (rollback facile)
- Preview deployments pour chaque commit

## Support

- [Documentation Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Documentation D1](https://developers.cloudflare.com/d1/)
- [Documentation Wrangler](https://developers.cloudflare.com/workers/wrangler/)
