import { InputBaseProps as MuiInputProps } from "@mui/material";

export interface InputProps extends Omit<MuiInputProps, "onChange"> {
    label: string;
    value?: string;
    defaultValue?: string
    variant: "outlined" | "filled" | "standard"
    onChange: (value: string) => void;
}