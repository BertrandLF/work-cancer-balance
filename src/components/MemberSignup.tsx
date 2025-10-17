import { useState, FormEvent } from "react";

export default function MemberSignup() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());

    // Validation
    if (!payload.name || !payload.email) {
      setStatus("error");
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch("/api/member-signup", {
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
        setMessage("Merci ! Nous vous contacterons bientôt.");
        form.reset();
      }
    } catch {
      setStatus("error");
      setMessage("Erreur de connexion. Veuillez réessayer.");
    }
  }

  return (
    <section id="devenir-membre" className="section bg-gradient-to-br from-primary-50 via-rose-50 to-orange-50 dark:from-primary-950/20 dark:via-rose-950/20 dark:to-gray-900">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl">
          <div className="card p-8">
            <h2 className="text-3xl font-bold text-center mb-4">
              Devenir membre
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
              Rejoignez notre communauté et bénéficiez d'un accompagnement personnalisé.
            </p>

            <form onSubmit={onSubmit} className="space-y-5" aria-live="polite" role="status">
              <div>
                <label htmlFor="member-name" className="block text-sm font-semibold mb-2">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="member-name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Votre nom"
                  disabled={status === "sending"}
                />
              </div>

              <div>
                <label htmlFor="member-email" className="block text-sm font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="member-email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  placeholder="votre@email.com"
                  disabled={status === "sending"}
                />
              </div>

              <div>
                <label htmlFor="member-phone" className="block text-sm font-semibold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="member-phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  placeholder="+41 XX XXX XX XX"
                  disabled={status === "sending"}
                />
              </div>

              <div>
                <label htmlFor="member-role" className="block text-sm font-semibold mb-2">
                  Je suis
                </label>
                <select
                  id="member-role"
                  name="role"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
                  disabled={status === "sending"}
                >
                  <option value="">Sélectionnez...</option>
                  <option value="employee">Employé·e</option>
                  <option value="employer">Employeur</option>
                  <option value="other">Autre</option>
                </select>
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
                {status === "sending" ? "Envoi en cours..." : "Devenir membre"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
