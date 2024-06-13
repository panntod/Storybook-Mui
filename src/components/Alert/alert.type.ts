import React from "react";
import { AlertProps as MuiAlertProps } from "@mui/material";

export interface AlertProps extends MuiAlertProps {
  children?: React.ReactNode;
  title: string;
  message: string;
}
