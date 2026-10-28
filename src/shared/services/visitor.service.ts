import axios from "axios";

export interface VisitorInfo {
  ip?: string;
  city?: string;
  region?: string;
  country_name?: string;
  country_code?: string;
  org?: string;
  timezone?: string;
}

interface IpifyResponse {
  ip?: string;
}

const visitorApi = axios.create({
  timeout: 5000,
});

export const visitorService = {
  async getInfo(): Promise<VisitorInfo> {
    try {
      const { data } = await visitorApi.get<VisitorInfo>(
        "https://ipapi.co/json/",
      );

      if (data.ip) {
        return data;
      }
    } catch (error) {
      console.error("Visitor location lookup failed:", error);
    }

    try {
      const { data } = await visitorApi.get<IpifyResponse>(
        "https://api.ipify.org?format=json",
      );

      return {
        ip: data.ip,
      };
    } catch (error) {
      console.error("Visitor IP lookup failed:", error);

      return {};
    }
  },
};
