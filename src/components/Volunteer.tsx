export default function Volunteer() {
  return (
    <section id="benevole" className="section bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-5xl mb-6">🤝</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Devenez bénévole
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-balance">
            Vous souhaitez contribuer à notre mission et soutenir les personnes touchées par le cancer ? Rejoignez notre équipe de bénévoles.
          </p>

          <a
            href="mailto:benevole@workcancerbalance.com?subject=Devenir bénévole"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Nous contacter par email
          </a>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            benevole@workcancerbalance.com
          </p>
        </div>
      </div>
    </section>
  );
}
