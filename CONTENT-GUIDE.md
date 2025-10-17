# Guide de personnalisation du contenu

Le contenu actuel est en français et suit la structure du site existant. Voici où modifier chaque section:

## Sections principales

### Hero (Page d'accueil)
**Fichier**: `src/components/Hero.tsx`
- Titre principal
- Sous-titre
- Texte des boutons CTA

### À propos
**Fichier**: `src/components/About.tsx`
- Description de l'organisation
- Texte pour employé·e·s
- Texte pour employeurs

### Services
**Fichier**: `src/components/Services.tsx`
- Coaching individuel
- Ateliers de groupe
- Conseil en entreprise

Ajoutez/retirez des services en modifiant le tableau `services`.

### Approche
**Fichier**: `src/components/Approach.tsx`
- 4 étapes du processus
- Section valeurs (Bienveillance, Confidentialité, Équilibre)

### Formulaires

#### Devenir membre
**Fichier**: `src/components/MemberSignup.tsx`
- Labels et placeholders
- Messages de succès/erreur
- Options dans le sélecteur "Je suis"

#### Contact
**Fichier**: `src/components/ContactForm.tsx`
- Labels et placeholders
- Messages de succès/erreur

#### Bénévolat
**Fichier**: `src/components/Volunteer.tsx`
- Texte d'introduction
- Email de contact (actuellement: `benevole@workcancerbalance.com`)

### Navigation
**Fichier**: `src/components/Header.tsx`
- Liens de navigation
- Texte du bouton CTA

### Pied de page
**Fichier**: `src/components/Footer.tsx`
- Informations de contact
- Adresse (18 Route des Jeunes, 1227 Lancy)
- Téléphone (+41 77 463 49 83)
- Liens légaux

## Pages légales

### Politique de confidentialité
**Fichier**: `public/privacy.html`
HTML statique à personnaliser avec vos informations légales réelles.

### Conditions d'utilisation
**Fichier**: `public/terms.html`
HTML statique à personnaliser avec vos conditions réelles.

## Couleurs et design

### Palette de couleurs
**Fichier**: `src/styles/tokens/colors.css`

Couleurs actuelles:
- **Primaire**: Terracotta/Rose (#dc6464 à #c54646)
- **Secondaire**: Teal/Sage (#14b8a6 à #0d9488)
- **Fond**: Crème chaud (#fffbf5)

### Typographie
**Fichier**: `src/styles/tokens/typography.css`

Actuellement: System fonts pour les performances

Pour utiliser une police personnalisée:
1. Ajoutez le lien Google Fonts dans `index.html`
2. Modifiez `--font-sans` dans `typography.css`

## Emails de contact

Emails utilisés dans le site:
- **Bénévolat**: `benevole@workcancerbalance.com` (Volunteer.tsx:44)
- **Confidentialité**: `privacy@workcancerbalance.com` (privacy.html)
- **Général**: `info@workcancerbalance.com` (terms.html)

Modifier ces adresses dans les fichiers respectifs.

## Images et logos

Le site utilise actuellement des emojis (🎗️) comme icônes temporaires.

Pour ajouter un vrai logo:
1. Placez votre logo dans `/public/assets/logo.png`
2. Modifiez `src/components/Header.tsx` ligne 36:
   ```tsx
   <img src="/assets/logo.png" alt="Work&Cancer Balance" className="h-8" />
   ```

## Métadonnées SEO

**Fichier**: `index.html`

Modifiez:
- `<title>`
- `<meta name="description">`
- Ajoutez Open Graph tags si besoin

## Mode sombre

Le mode sombre est configuré mais pas activé par défaut. Pour ajouter un toggle:

1. Ajoutez un bouton dans `Header.tsx`
2. Utilisez: `document.documentElement.classList.toggle("dark")`

## Recommandations

1. **Avant la mise en ligne**: Remplacez tout le contenu placeholder par le contenu réel du site existant
2. **SEO**: Ajoutez des balises meta complètes
3. **Analytics**: Intégrez Cloudflare Web Analytics (gratuit) ou Plausible
4. **Images**: Optimisez toutes les images en WebP
5. **Legal**: Faites valider privacy.html et terms.html par un avocat

## Aide rapide

**Tester en local:**
```bash
pnpm dev
```

**Build de production:**
```bash
pnpm build
```

**Déployer:**
```bash
pnpm deploy
```

Voir `DEPLOYMENT.md` pour les instructions détaillées de déploiement.
