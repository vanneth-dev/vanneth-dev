export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    name?: string;
    roles?: { name: string }[];
  };
  navigate?: (path: string) => void;
}
