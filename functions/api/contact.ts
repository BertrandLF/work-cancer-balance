interface Env {
  DB: D1Database;
}

function sanitizeString(input: string): string {
  return input.replace(/[<>'"&]/g, "").substring(0, 2000).trim();
}

function sanitizeEmail(input: string): string {
  return input.replace(/[<>]/g, "").trim().toLowerCase().substring(0, 254);
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  try {
    const data = await ctx.request.json().catch(() => null);

    if (!data || typeof data !== "object") {
      return new Response(JSON.stringify({ error: "Invalid request data" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const { name, email, phone, message } = data as Record<string, unknown>;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim() === "") {
      return new Response(JSON.stringify({ error: "Name is required" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    if (!email || typeof email !== "string") {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    // Sanitize inputs
    const cleanName = sanitizeString(String(name));
    const cleanEmail = sanitizeEmail(String(email));
    const cleanPhone = phone && typeof phone === "string" ? sanitizeString(phone) : null;
    const cleanMessage = sanitizeString(String(message));

    // Create table if not exists
    await ctx.env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
      )
    `).run();

    // Insert record
    await ctx.env.DB.prepare(`
      INSERT INTO contact_messages (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `)
      .bind(cleanName, cleanEmail, cleanPhone, cleanMessage)
      .run();

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (err) {
    console.error("Error in contact:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
