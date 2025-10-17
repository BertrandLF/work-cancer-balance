export default function About() {
  return (
    <section id="a-propos" className="section bg-white dark:bg-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            À propos
          </h2>

          <div className="prose prose-lg mx-auto text-gray-600 dark:text-gray-300">
            <p className="text-center mb-8 text-xl text-balance">
              Work&Cancer Balance Suisse accompagne les personnes touchées par le cancer dans leur équilibre professionnel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="card p-6">
                <div className="text-3xl mb-4">👤</div>
                <h3 className="font-bold text-xl mb-3">Pour les employé·e·s</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Accompagnement personnalisé pour gérer votre diagnostic, traitement, et retour au travail avec confiance et sérénité.
                </p>
              </div>

              <div className="card p-6">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="font-bold text-xl mb-3">Pour les employeurs</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conseils et soutien pour accompagner vos collaborateurs et créer un environnement de travail bienveillant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
