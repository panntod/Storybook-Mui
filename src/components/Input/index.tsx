import React from 'react';

import { TextField } from '@mui/material';
import { InputProps } from './input.props';

export const MuiInput: React.FC<InputProps> = ({ error, label, value, variant, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <TextField
            error={error}
            label={label}
            value={value}
            onChange={handleChange}
            variant={variant}
        />
    );
};