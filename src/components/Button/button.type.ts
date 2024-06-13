// A TypeScript interface named ButtonProps is declared, which extends
// the MuiButtonProps by omitting original prop and adding a new prop
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps extends Omit<MuiButtonProps, "color"> {
  color?: "primary" | "success" | "warning" | "error" | "secondary";
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}
