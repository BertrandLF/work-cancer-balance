export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-prose section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization info */}
          <div>
            <img
              src="/assets/logo.png"
              alt="Work&Cancer Balance Suisse"
              className="h-16 w-auto object-contain mb-3"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Coaching pour équilibrer travail et cancer. Accompagnement professionnel et bienveillant.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p className="font-semibold">Association Work&Cancer Balance</p>
              <p>Rampe de Chavant 12</p>
              <p>Résidence du Cottage</p>
              <p>1232 Confignon, Suisse</p>
              <p>
                <a
                  href="tel:+41774634983"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  +41 77 463 49 83
                </a>
              </p>
              <p className="text-xs mt-2">CCP 15-73024-5</p>
            </div>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Informations légales</h3>
            <div className="space-y-2 text-sm">
              <a
                href="/privacy.html"
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="/terms.html"
                className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Work&Cancer Balance Suisse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
