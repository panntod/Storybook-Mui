import React from 'react';
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
    color?: 'primary' | 'success' | 'warning' | 'error' | 'secondary';
    variant?: 'text' | 'contained' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export const MuiButton: React.FC<ButtonProps> = ({
    variant = 'contained',
    color,
    size = 'medium',
    label,
    onClick,
}) => {

    return (
        <Button
            color={color}
            variant={variant}
            size={size}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};