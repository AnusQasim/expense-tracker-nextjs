export interface NavItemType {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
  isActive?: boolean;
}
