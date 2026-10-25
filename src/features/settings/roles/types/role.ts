export type Role = {
  id: number;
  uuid: string;
  name: string;
  nameKm: string;
  slug: string;
  active: "Y" | "N";
  order?: number;
  updatedAt: Date;
  createdAt: Date;
  deletedAt?: string | null;
};
