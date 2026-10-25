export enum Locale {
  EN = "en",
  KH = "km",
}

export interface UserFormData {
  name: string;
  nameKm: string;
  roles: number[];
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
  locale: Locale;
  active: "Y" | "N";
  order?: number;
}

export type User = {
  id: number;
  name: string;
  nameKm: string;
  email: string;
  username: string;
  locale: Locale;
  active: "Y" | "N";
  order?: number;
  updatedAt: Date;
  createdAt: Date;
  roles: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
};
