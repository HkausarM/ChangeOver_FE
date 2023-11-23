import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Would you like to?
                    </Typography>
                    <Button variant="outlined">Buy</Button>
                    <Button variant="outlined" href="#outlined-buttons">
                        Sell
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}