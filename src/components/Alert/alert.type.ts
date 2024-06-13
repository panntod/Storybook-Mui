import React from "react";

export interface AlertProps {
  children?: React.ReactNode;
  severity: "success" | "warning" | "error" | "info";
  variant: "filled" | "outlined";
  title: string;
  message: string;
}
