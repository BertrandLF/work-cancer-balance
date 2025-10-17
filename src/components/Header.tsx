import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const navItems = [
    { href: "#coaching", label: "Coaching" },
    { href: "#valeurs", label: "Nos valeurs" },
    { href: "#qui-sommes-nous", label: "Qui sommes-nous ?" },
    { href: "#devenir-membre", label: "Devenez membre" },
    { href: "#benevole", label: "Devenez bénévole" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container-prose">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/assets/logo.png"
              alt="Work&Cancer Balance Suisse"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#devenir-membre"
              className="btn-primary"
            >
              Devenir membre
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#devenir-membre"
              onClick={handleNavClick}
              className="btn-primary mt-4"
            >
              Devenir membre
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
