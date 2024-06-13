import React from "react";
import { type AlertColor, AlertProps as MuiAlertProps } from "@mui/material";

export interface AlertProps extends Omit<MuiAlertProps, "variant"> {
  children?: React.ReactNode;
  severity: AlertColor;
  variant: "filled" | "outlined";
  title: string;
  message: string;
}
