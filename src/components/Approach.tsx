export default function Approach() {
  const steps = [
    {
      number: "1",
      title: "Écoute",
      description: "Nous prenons le temps de comprendre votre situation unique et vos besoins spécifiques.",
    },
    {
      number: "2",
      title: "Analyse",
      description: "Ensemble, nous identifions les défis et les opportunités dans votre parcours professionnel.",
    },
    {
      number: "3",
      title: "Stratégie",
      description: "Nous élaborons un plan d'action personnalisé et adapté à votre réalité.",
    },
    {
      number: "4",
      title: "Accompagnement",
      description: "Je vous accompagne pas à pas dans la mise en œuvre de vos solutions.",
    },
  ];

  return (
    <section id="approche" className="section bg-white dark:bg-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Notre approche
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            Un accompagnement bienveillant, confidentiel et professionnel, centré sur vos besoins.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 card p-8 bg-gradient-to-br from-teal-50 to-rose-50 dark:from-teal-950/20 dark:to-rose-950/20">
            <h3 className="font-bold text-xl mb-4 text-center">
              Nos valeurs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🤝</div>
                <p className="font-semibold">Bienveillance</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🔒</div>
                <p className="font-semibold">Confidentialité</p>
              </div>
              <div>
                <div className="text-2xl mb-2">⚖️</div>
                <p className="font-semibold">Équilibre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
