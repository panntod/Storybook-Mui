import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface CustomCardProps {
    title: string;
    description: string;
    image?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const MuiCard: React.FC<CustomCardProps> = ({
    title,
    description,
    image = "https://placehold.co/500x400",
    onClick,
    children
}) => {
    return (
        <Card onClick={onClick}>
            <CardActionArea>
                {image && (
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={title}
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    {children}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
