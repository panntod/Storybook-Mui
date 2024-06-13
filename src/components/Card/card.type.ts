export interface CustomCardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}
