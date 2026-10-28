import axios from "axios";

const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

interface TelegramResponse {
  ok: boolean;
  description?: string;
}

export interface TelegramMessage {
  text: string;
}

export const telegramService = {
  async sendMessage({ text }: TelegramMessage): Promise<boolean> {
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Telegram bot configuration is missing.");
      return false;
    }

    try {
      const { data } = await axios.post<TelegramResponse>(
        `${TELEGRAM_API}/sendMessage`,
        {
          chat_id: CHAT_ID,
          text,
          disable_web_page_preview: true,
        },
        {
          timeout: 10000,
        },
      );

      return data.ok === true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Telegram notification failed:",
          error.response?.data || error.message,
        );
      } else {
        console.error("Telegram notification failed:", error);
      }

      return false;
    }
  },
};
