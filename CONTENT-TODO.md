# Content TODO - Pages manquantes

Trois pages du site original contiennent du contenu qui doit être ajouté manuellement:

## 1. Page Coaching (`/coaching-1`)

**Fichier à modifier**: `src/components/CoachingDetails.tsx`

**URL originale**: https://www.workcancerbalance.com/coaching-1

**Contenu à extraire et ajouter**:
- Description détaillée des services de coaching
- Titre: "Concilier cancer du sein et travail"
- Pour qui s'adresse le coaching
- Objectifs et bénéfices
- Déroulement des séances
- Modalités pratiques (durée, tarifs, etc.)

**Lignes à remplacer**: Cherchez `[TODO: Ajouter le contenu réel de la page /coaching-1]` dans le fichier

---

## 2. Page Mes Valeurs (`/mes-valeurs`)

**Fichier à modifier**: `src/components/Values.tsx`

**URL originale**: https://www.workcancerbalance.com/mes-valeurs

**Contenu à extraire et ajouter**:
- Informations sur Caroline Brenot
- Parcours professionnel
- Formation et certifications
- Expérience personnelle avec le cancer et le travail
- Philosophie d'accompagnement
- Valeurs fondamentales

**Lignes à remplacer**:
- `[TODO: Ajouter le contenu réel de la page /mes-valeurs]`
- `[TODO: Ajouter formation et certifications]`
- `[TODO: Ajouter parcours professionnel]`

---

## 3. Page Blank (`/blank`)

**URL originale**: https://www.workcancerbalance.com/blank

Cette page pourrait être:
- Une page de témoignages
- Une page FAQ
- Une page ressources
- Une page tarifs

**Action requise**:
1. Visitez l'URL pour voir le contenu
2. Créez un nouveau composant si nécessaire, ou
3. Intégrez le contenu dans une section existante

---

## Comment extraire le contenu du site Wix

### Méthode 1: Copier-coller manuel
1. Visitez chaque page dans votre navigateur
2. Copiez le texte visible
3. Collez-le dans les fichiers correspondants

### Méthode 2: Inspection du code source
1. Ouvrez la page dans Chrome/Firefox
2. Faites clic droit → "Inspecter"
3. Trouvez les éléments de contenu dans le DOM
4. Copiez le texte

### Méthode 3: Utiliser l'éditeur Wix
Si vous avez accès à l'éditeur Wix:
1. Ouvrez chaque page en mode édition
2. Copiez le contenu texte
3. Gardez la structure (titres, paragraphes, listes)

---

## Format recommandé pour le contenu

### Pour le texte simple:
```tsx
<p className="text-gray-600 dark:text-gray-300">
  Votre texte ici
</p>
```

### Pour les titres:
```tsx
<h3 className="font-bold text-xl mb-3">
  Votre titre
</h3>
```

### Pour les listes:
```tsx
<ul className="space-y-2">
  <li>✓ Point 1</li>
  <li>✓ Point 2</li>
</ul>
```

---

## Après avoir ajouté le contenu

1. **Testez localement**:
   ```bash
   pnpm dev
   ```
   Visitez http://localhost:5173/

2. **Vérifiez la mise en page**:
   - Le texte s'affiche correctement
   - Les espacements sont bons
   - Responsive fonctionne (réduisez la fenêtre)

3. **Build de test**:
   ```bash
   pnpm build
   ```

4. **Déployez**:
   ```bash
   pnpm deploy
   ```

---

## Besoin d'aide?

Si vous avez du mal à extraire le contenu des pages Wix, vous pouvez:
1. Me fournir des captures d'écran des pages
2. Copier-coller le texte visible directement
3. Me donner accès temporaire à l'éditeur Wix

Je pourrai alors mettre à jour les composants avec le contenu exact.
