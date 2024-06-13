import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './button.type';

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