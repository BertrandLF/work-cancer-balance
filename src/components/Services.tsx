export default function Services() {
  const services = [
    {
      icon: "💬",
      title: "Coaching individuel",
      description:
        "Séances personnalisées pour vous accompagner dans votre parcours unique, à votre rythme et selon vos besoins.",
    },
    {
      icon: "👥",
      title: "Ateliers de groupe",
      description:
        "Partage d'expériences et apprentissage collectif dans un environnement bienveillant et confidentiel.",
    },
    {
      icon: "📊",
      title: "Conseil en entreprise",
      description:
        "Accompagnement des organisations pour créer des politiques inclusives et soutenir les collaborateurs.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container-prose">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Nos services
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-balance">
            Des solutions adaptées à chaque situation pour vous accompagner au mieux.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card p-6 hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
