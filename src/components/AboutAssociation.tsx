export default function AboutAssociation() {
  return (
    <section id="a-propos-association" className="section bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            À propos de l'Association
          </h2>

          <div className="card p-8 mb-8">
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              <strong>Work&Cancer balance</strong> est une association à but non lucratif qui a été fondée en 2018.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              Elle a pour but de promouvoir le maintien de l'identité professionnelle des personnes touchées par le cancer et de transformer l'épreuve de la maladie en opportunité d'épanouissement professionnel.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
              À travers des actions de sensibilisation, de formation et d'accompagnement, nous œuvrons pour une meilleure conciliation entre vie professionnelle et la maladie.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
                <p className="text-gray-800 dark:text-gray-100 font-medium">
                  Nous aidons les collaborateurs touchés à retrouver leur place.
                </p>
              </div>

              <div className="bg-secondary-50 dark:bg-secondary-900/20 p-6 rounded-lg">
                <p className="text-gray-800 dark:text-gray-100 font-medium">
                  Nous aidons les entreprises à mieux accompagner leurs collaborateurs et leurs équipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
