export default function WhoWeAre() {
  return (
    <section id="qui-sommes-nous" className="section bg-white dark:bg-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Qui sommes-nous ?
          </h2>

          <div className="prose prose-lg max-w-none">
            <div className="card p-8 mb-8 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20">
              <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                Caroline Brenot travaille dans des milieux professionnels exigeants (droit et finance), quand à 37 ans, son parcours prend un tournant brutal en recevant un premier diagnostic de cancer. Après une récidive quelques années plus tard, elle découvre une réalité peu abordée : le cancer bouleverse les trajectoires professionnelles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="text-2xl">😟</span>
                  Le défi
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Le cancer fait peur et personne n'est préparé pour répondre aux enjeux du cancer & travail.</strong>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Pour les personnes touchées :</strong> fatigue persistante, troubles cognitifs, perte de confiance, absence de repères et manque de visibilité…
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Pour les entreprises :</strong> manque d'information, crainte de mal faire, besoin de prendre soin des équipes, difficulté à concilier accompagnement humain et exigences de performance.
                </p>
              </div>

              <div className="card p-6 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-gray-800">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  L'urgence
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-lg font-medium">
                  Naviguer dans cette transition sans accompagnement peut mener à des situations dramatiques.
                </p>
              </div>
            </div>

            <div className="card p-8 mb-8">
              <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                La solution
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Consciente du manque de soutien pour les personnes concernées et les entreprises, elle décide de se former au coaching et à l'accompagnement des transitions professionnelles.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Elle accompagne aujourd'hui celles et ceux qui doivent se réapproprier leur parcours professionnel après un cancer, ainsi que les employeurs souhaitant mieux les soutenir.
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-lg font-medium">
                Son approche, pragmatique et bienveillante, vise à construire des solutions adaptées pour que chacun puisse retrouver sa place et avancer sereinement.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-3xl mb-6 text-center">
                Parcours de vies
              </h3>
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-rose-50 dark:from-primary-950/20 dark:to-rose-950/20 text-center">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  Formation et parcours professionnel détaillé disponible sur demande.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Prendre contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
