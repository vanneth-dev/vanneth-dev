import { ReactNode } from "react";

export abstract class BaseFeatureRoutes {
  abstract readonly paths: Record<string, any>;
  abstract render(): ReactNode;
}
