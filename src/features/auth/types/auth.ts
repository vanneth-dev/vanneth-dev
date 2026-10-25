export interface LoginResponse {
  access_token: string;
  user: {
    id: number;
    email: string;
    username: string;
    roles: Array<{
      id: number;
      name: string;
      slug: string;
    }>;
  };
}
export interface Permission {
  id: number;
  slug: string;
}

export interface Role {
  id: number;
  name: string;
  nameKm: string;
  slug: string;
  order: number;
  active: "Y" | "N";
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  roles: Role[];
}
