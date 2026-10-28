const IGNORE_IPS = ["96.9.66.75", "119.13.152.90"];

const COOLDOWN_MS = 6 * 60 * 60 * 1000;

const OWNER_KEY = "is_owner";
const LAST_NOTIFIED_KEY = "visit_last_notified";

interface VisitorInfo {
  ip?: string;
  city?: string;
  country_name?: string;
}

const BOT_USER_AGENT = /bot|crawl|spider|preview|facebookexternalhit|telegram/i;

export async function initVisitorNotification(): Promise<void> {
  try {
    if (typeof window === "undefined") return;

    const { localStorage, location, navigator } = window;

    if (location.search.includes("owner=1")) {
      localStorage.setItem(OWNER_KEY, "1");
    }

    if (localStorage.getItem(OWNER_KEY) === "1") return;

    if (BOT_USER_AGENT.test(navigator.userAgent)) return;

    const lastNotified = Number(localStorage.getItem(LAST_NOTIFIED_KEY) || "0");

    if (Date.now() - lastNotified < COOLDOWN_MS) return;

    let info: VisitorInfo = {};

    try {
      const response = await fetch("https://ipapi.co/json/");

      if (!response.ok) {
        throw new Error("Failed to retrieve visitor information");
      }

      info = await response.json();
    } catch {
      const response = await fetch("https://api.ipify.org?format=json");

      if (!response.ok) {
        throw new Error("Failed to retrieve visitor IP");
      }

      info = await response.json();
    }

    if (!info.ip || IGNORE_IPS.includes(info.ip)) return;

    const message = [
      "New visitor on portfolio site.",
      `Location: ${info.city || "?"}, ${info.country_name || "?"}`,
      `IP: ${info.ip}`,
      `Referrer: ${document.referrer || "Direct"}`,
      "",
      "#visitor #portfolio",
    ].join("\n");

    // Set cooldown only after a successful notification.
    // This endpoint must be implemented on your backend.
    const response = await fetch("/api/visitor-notification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to send visitor notification");
    }

    localStorage.setItem(LAST_NOTIFIED_KEY, String(Date.now()));
  } catch (error) {
    console.error("Visitor notification failed:", error);
  }
}
