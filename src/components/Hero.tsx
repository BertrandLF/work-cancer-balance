export default function Hero() {
  return (
    <section className="section pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="container-prose">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 mb-4 font-medium">
            Le combat ne s'arrête pas avec les traitements.
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance mb-8">
            Le travail ne s'arrête pas avec la maladie :{" "}
            <span className="text-primary-600 dark:text-primary-400">
              on peut concilier les deux
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Prendre rendez-vous
            </a>
            <a href="#a-propos" className="btn-secondary w-full sm:w-auto">
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
