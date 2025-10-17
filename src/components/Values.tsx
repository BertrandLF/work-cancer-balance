export default function Values() {
  return (
    <section id="valeurs" className="section bg-white dark:bg-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Nos valeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Yes, you can !</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Vous êtes plus fort que vous ne le pensez. Faites-vous confiance !
              </p>
            </div>

            <div className="card p-6 hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Win-Win</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Nous vous offrons une approche réaliste et pragmatique pour concilier vos besoins avec ceux votre entreprise.
              </p>
            </div>

            <div className="card p-6 hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Vous êtes unique</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                La carte n'est pas le territoire et chacun a sa carte du monde. Nous découvrirons la vôtre avec respect et bienveillance.
              </p>
            </div>

            <div className="card p-6 hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">L'identité par le travail</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Le travail est un des piliers essentiels de l'identité de la personne. Continuer à travailler ou retrouver un travail après une maladie est un droit fondamental.
              </p>
            </div>

            <div className="card p-6 hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                Confidentialité
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Tout ce que vous partagerez restera entre nous.
              </p>
            </div>

            <div className="card p-6 hover:scale-105 transition-transform">
              <h3 className="font-bold text-xl mb-3">Code de déontologie</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                Respecte le code de déontologie de la Fédération Internationale de Coaching (I.C.F.).
              </p>
              <a
                href="https://www.coachfederation.ch/fileadmin/Ethics_CoreCompetencies/Ethics_French_-_June_2015.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 text-sm hover:underline inline-flex items-center gap-1"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
