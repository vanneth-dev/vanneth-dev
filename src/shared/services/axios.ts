import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { encryption } from "../utils/cryption";

const Axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers["x-client-key"] = encryption(
      import.meta.env.VITE_API_CLIENT_KEY,
    );
    config.headers["x-secret-key"] = encryption(
      import.meta.env.VITE_API_SECRET_KEY,
    );

    return config;
  },
  (error) => Promise.reject(error),
);

Axios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response && [403, 429].includes(error.response.status)) {
      window.location.href = "/blocked";
    }
    return Promise.reject(error);
  },
);

export default Axios;
