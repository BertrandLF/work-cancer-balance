export default function Mission() {
  return (
    <section id="mission" className="section bg-gradient-to-br from-primary-50 via-rose-50 to-orange-50 dark:from-primary-950/20 dark:via-rose-950/20 dark:to-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Mission
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 font-medium mb-4 text-balance">
              Favoriser le maintien et le retour au travail des personnes touchées par le cancer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-balance">
              Informer, former et accompagner les personnes et les entreprises à toutes les étapes de la maladie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8 bg-white dark:bg-gray-900">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="font-bold text-2xl mb-4">Particuliers</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Pour les personnes qui veulent continuer à travailler pendant les traitements, se préparer à reprendre le travail ou retrouver du sens à leur vie professionnelle.
              </p>
            </div>

            <div className="card p-8 bg-white dark:bg-gray-900">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-bold text-2xl mb-4">Entreprises</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Pour les entreprises qui veulent accompagner dans les meilleures conditions leurs collaborateurs et leurs équipes face au cancer.
              </p>
            </div>
          </div>

          <div className="card p-8 bg-white dark:bg-gray-900">
            <h3 className="font-bold text-2xl mb-6 text-center">Activités</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <span className="text-2xl">💬</span>
                <span className="font-medium">Séances d'informations</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <span className="text-2xl">🎯</span>
                <span className="font-medium">Coaching individuel</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <span className="text-2xl">👥</span>
                <span className="font-medium">Animation d'ateliers</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <span className="text-2xl">🤝</span>
                <span className="font-medium">Coaching d'équipe</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <span className="text-2xl">🏢</span>
                <span className="font-medium">Accompagnement en entreprise</span>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <span className="text-2xl">📚</span>
                <span className="font-medium">Formation aux bonnes pratiques</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
