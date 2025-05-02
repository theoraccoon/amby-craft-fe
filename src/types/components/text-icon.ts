export interface ToggleTextWithIconProps {
    icon: React.ReactNode;
    label: string;
    activeColor?: string;
    inactiveColor?: string;
    defaultActive?: boolean;
    onToggle?: (active: boolean) => void;
  }
  
