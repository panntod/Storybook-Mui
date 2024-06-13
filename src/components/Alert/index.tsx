import React from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';
import { AlertProps } from './alert.type';

const MuiAlert: React.FC<AlertProps> = ({ children, message, title, severity = "success", variant = "filled" }) => {
    return (
        <Alert
            severity={severity}
            variant={variant}
            action={children}
        >
            <AlertTitle>{title}</AlertTitle>
            {message}
        </Alert>
    );
};

export default MuiAlert;
