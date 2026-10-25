import { User } from "src/features/auth/types/auth";
import Axios from "src/shared/services/axios";

export const saveToken = (token: string) => {
  localStorage.setItem("access_token", token);
};

export const getToken = (): string | null => {
  return localStorage.getItem("access_token");
};

export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");
  localStorage.removeItem("sidebarOpen");
};

export const isAuthenticated = async () => {
  const token = await verifyToken();
  if (!token) {
    return false;
  } else {
    return true;
  }
};

export const verifyToken = async () => {
  const token = localStorage.getItem("access_token");
  if (!token) return false;
  try {
    const response = await Axios.get("/auth/verify-token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status === 200;
  } catch {
    return false;
  }
};

export const getUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const authUser = async (): Promise<User | null> => {
  try {
    const { data } = await Axios.get("/auth/user");
    return data;
  } catch (error: any) {
    console.error("Failed to fetch auth user", error);
    return null;
  }
};
