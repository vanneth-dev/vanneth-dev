import axios from "axios";

export interface VisitorInfo {
  ip?: string;
  city?: string;
  region?: string;
  country_name?: string;
  country_code?: string;
  timezone?: string;
}

export interface ClientDeviceInfo {
  device: string;
  os: string;
  browser: string;
  screen: string;
  language: string;
  platform: string;
}

interface IpifyResponse {
  ip?: string;
}

const visitorApi = axios.create({
  timeout: 5000,
});

function getDeviceType(userAgent: string): string {
  if (/iPad|Tablet/i.test(userAgent)) {
    return "Tablet";
  }

  if (/Mobi|iPhone|Android.*Mobile|Windows Phone/i.test(userAgent)) {
    return "Mobile";
  }

  if (/Android/i.test(userAgent)) {
    return "Tablet";
  }

  return "Desktop";
}

function getOperatingSystem(userAgent: string): string {
  if (/Windows NT 10/i.test(userAgent)) return "Windows 10/11";
  if (/Windows NT 6\.3/i.test(userAgent)) return "Windows 8.1";
  if (/Windows NT 6\.1/i.test(userAgent)) return "Windows 7";
  if (/Windows/i.test(userAgent)) return "Windows";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
  if (/Android/i.test(userAgent)) return "Android";
  if (/Mac OS X/i.test(userAgent)) return "macOS";
  if (/CrOS/i.test(userAgent)) return "ChromeOS";
  if (/Linux/i.test(userAgent)) return "Linux";

  return "Unknown OS";
}

function getBrowser(userAgent: string): string {
  if (/EdgA?\/|EdgiOS\//i.test(userAgent)) return "Microsoft Edge";
  if (/OPR\/|Opera/i.test(userAgent)) return "Opera";
  if (/SamsungBrowser\//i.test(userAgent)) return "Samsung Internet";
  if (/Firefox\/|FxiOS\//i.test(userAgent)) return "Firefox";
  if (/CriOS\//i.test(userAgent)) return "Chrome (iOS)";
  if (/Chrome\//i.test(userAgent)) return "Chrome";
  if (/Safari\//i.test(userAgent)) return "Safari";

  return "Unknown Browser";
}

function getClientDeviceInfo(): ClientDeviceInfo {
  const userAgent = navigator.userAgent;

  return {
    device: getDeviceType(userAgent),
    os: getOperatingSystem(userAgent),
    browser: getBrowser(userAgent),
    screen: `${window.screen.width} × ${window.screen.height}`,
    language: navigator.language || "Unknown",
    platform: navigator.platform || "Unknown",
  };
}

export const visitorService = {
  async getInfo(): Promise<VisitorInfo> {
    try {
      const { data } = await visitorApi.get<VisitorInfo>(
        "https://ipapi.co/json/",
      );

      if (data.ip) return data;
    } catch (error) {
      console.error("Visitor location lookup failed:", error);
    }

    try {
      const { data } = await visitorApi.get<IpifyResponse>(
        "https://api.ipify.org?format=json",
      );

      return { ip: data.ip };
    } catch (error) {
      console.error("Visitor IP lookup failed:", error);

      return {};
    }
  },

  getDeviceInfo(): ClientDeviceInfo {
    return getClientDeviceInfo();
  },
};
