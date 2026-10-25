import { AxiosError } from "axios";
import Axios from "src/shared/services/axios";
import {
  saveToken,
  logout,
  isAuthenticated,
  getUser,
} from "src/features/auth/services/utils";
import { LoginResponse } from "src/features/auth/types/auth";
import { encryption } from "src/shared/utils/cryption";

const login = async (
  email: string,
  password: string,
  remember: boolean,
  turnstileToken: string,
): Promise<LoginResponse> => {
  try {
    const { data } = await Axios.post<LoginResponse>("/auth/login", {
      email,
      password,
      remember,
      turnstileToken,
    });
    return data;
  } catch (error) {
    const axiosError = error as AxiosError<any>;

    if (!axiosError.response) {
      const isCors = axiosError.message === "Network Error";
      console.error(
        isCors
          ? "[auth] Request blocked — likely CORS misconfiguration or unreachable API. Check that the backend's Access-Control-Allow-Origin includes this origin, and that VITE_API_URL points to the right host."
          : "[auth] Request failed with no response:",
        axiosError,
      );
      const err = new Error(isCors ? "cors_or_network_error" : "network_error");
      (err as any).code = isCors ? "cors_or_network_error" : "network_error";
      throw err;
    }

    const code =
      axiosError.response.data?.message ??
      axiosError.response.data ??
      "unknown_error";
    const err = new Error(code);
    (err as any).code = code;
    throw err;
  }
};

export const loginService = async (
  email: string,
  password: string,
  remember: boolean,
  t: (key: string) => string,
  turnstileToken: string,
): Promise<LoginResponse> => {
  try {
    const encryptedPassword = encryption(password);
    const response = await login(
      email,
      encryptedPassword,
      remember,
      turnstileToken,
    );
    logout();
    saveToken(response.access_token);
    localStorage.setItem("user", JSON.stringify(response.user));
    return response;
  } catch (error) {
    const rawKey = (error as Error).message || "unknown_error";
    const message = t(`validation.${rawKey}`) || t(rawKey) || rawKey;
    throw new Error(message);
  }
};

/**
 * Check authentication status
 */
export const checkAuthentication = async (): Promise<boolean> => {
  return await isAuthenticated();
};

/**
 * Get current authenticated user
 */
export const getAuthenticatedUser = () => {
  return getUser();
};

/**
 * Logout service
 */
export const logoutService = () => {
  logout();
};
