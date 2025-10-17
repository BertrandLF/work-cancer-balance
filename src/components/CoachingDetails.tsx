export default function CoachingDetails() {
  return (
    <section id="coaching" className="section">
      <div className="container-prose">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Coaching
          </h2>

          <p className="text-center text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-balance">
            Nous vous accompagnons dans vos problématiques liées au travail à chaque étape du cancer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Annoncer son cancer</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Quoi dire, à qui et quand ? Maîtriser son message et anticiper les réactions...
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Communiquer en entreprise</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Avoir le bon discours. Affronter les préjugés et les peurs des autres. Savoir dire ce que l'on veut. Faire un point régulier. Poser des limites. Trouver la bonne distance.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Concilier le travail et les traitements</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Gérer les absences. Aménager son poste. Trouver des alliés. Bien vivre les changements d'état et d'apparence. Développer des stratégies pour compenser les troubles cognitifs ou la fatigue.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">S'arrêter de travailler</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Prendre du temps pour soi. Garder des liens avec l'entreprise, se tenir informé des changements, communiquer régulièrement sur son absence. Anticiper la reprise.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Retourner travailler</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Identifier le bon moment, connaître ses capacités, préparer et anticiper la reprise. Retrouver ses marques. Repenser son organisation, gérer le stress, éviter l'épuisement.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-lg mb-3">Chercher du travail</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Reprendre confiance en soi, se projeter dans le futur, préparer les entretiens, parler de son parcours professionnel et des périodes de non-emploi.
              </p>
            </div>

            <div className="card p-6 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-primary-50 to-rose-50 dark:from-primary-950/20 dark:to-rose-950/20">
              <h3 className="font-bold text-lg mb-3">Trouver du sens</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Faire le point, prendre du recul, revoir ses priorités. Construire un nouveau projet professionnel. Gérer la transition. Oser.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#contact" className="btn-primary">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
