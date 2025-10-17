import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    // Validation
    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        setStatus("error");
        setMessage(data?.error || "Une erreur s'est produite. Veuillez réessayer.");
        return;
      }

      const data = await res.json();
      if (data?.ok) {
        setStatus("success");
        setMessage("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
        form.reset();
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion. Veuillez réessayer.");
    }
  }

  return (
    <section id="contact" className="section bg-white dark:bg-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Nous contacter
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Une question ? Besoin d'informations ? N'hésitez pas à nous écrire.
          </p>

          <form onSubmit={onSubmit} className="space-y-5" aria-live="polite" role="status">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-semibold mb-2">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                placeholder="Votre nom"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                placeholder="votre@email.com"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-sm font-semibold mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                placeholder="+41 XX XXX XX XX"
                disabled={status === "sending"}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors resize-y"
                placeholder="Parlez-nous de votre situation..."
                disabled={status === "sending"}
              />
            </div>

            {status !== "idle" && (
              <div
                className={`p-4 rounded-lg ${
                  status === "success"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                    : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Vos données sont traitées de manière confidentielle conformément à notre{" "}
              <a href="/privacy.html" className="underline hover:text-primary-600">
                politique de confidentialité
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
