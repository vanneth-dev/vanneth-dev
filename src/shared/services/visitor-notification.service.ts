import { telegramService } from "./telegram.service";
import { visitorService } from "./visitor.service";

// const IGNORE_IPS = ["96.9.66.75", "119.13.152.90"];
const IGNORE_IPS = ["96.9.66.75"];

const COOLDOWN_MS = 6 * 60 * 60 * 1000;

const OWNER_KEY = "is_owner";
const LAST_NOTIFIED_KEY = "visit_last_notified";

const BOT_USER_AGENT = /bot|crawl|spider|preview|facebookexternalhit|telegram/i;

export const visitorNotificationService = {
  async notify(): Promise<void> {
    try {
      if (typeof window === "undefined") return;

      const { location, localStorage, navigator } = window;

      if (location.search.includes("owner=1")) {
        localStorage.setItem(OWNER_KEY, "1");
      }

      if (localStorage.getItem(OWNER_KEY) === "1") return;

      if (BOT_USER_AGENT.test(navigator.userAgent)) return;

      const lastNotified = Number(
        localStorage.getItem(LAST_NOTIFIED_KEY) || "0",
      );

      if (lastNotified > 0 && Date.now() - lastNotified < COOLDOWN_MS) {
        return;
      }

      const info = await visitorService.getInfo();

      if (!info.ip || IGNORE_IPS.includes(info.ip)) return;

      const device = visitorService.getDeviceInfo();

      const message = [
        "🔔 Portfolio Visitor",
        "",
        `🌐 Page: ${window.location.pathname}`,
        `📍 Location: ${info.city || "Unknown"}, ${info.country_name || "Unknown"}`,
        `🌐 IP: ${info.ip || "Unknown"}`,
        `💻 Device: ${device.device} · ${device.os}`,
        `🌍 Browser: ${device.browser}`,
        `🔗 Referrer: ${document.referrer || "Direct"}`,
        `🕒 Time: ${new Date().toLocaleString("en-GB", {
          timeZone: "Asia/Phnom_Penh",
        })}`,
        "",
        "#PortfolioVisitor",
      ].join("\n");

      const sent = await telegramService.sendMessage({
        text: message,
      });

      if (sent) {
        localStorage.setItem(LAST_NOTIFIED_KEY, String(Date.now()));
      }
    } catch (error) {
      console.error("Visitor notification failed:", error);
    }
  },
};
