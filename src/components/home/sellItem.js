import React, { useState } from 'react';
import Box from '@mui/material/Box';

export default function SellItemPage() {



    return (
        <Box className="sell-item-page"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        </Box>
    );
}
