import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { UrlProvider } from "../../provider/domainUrlProvider";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

let result = {}

export default function SellItemPage() {



    const categories = ['Men', 'Women', 'Kids'];
    const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL']
    const [priceNegotiable, setPriceNegotiable] = useState("")
    const [dialogOpen, setDialogOpen] = React.useState(false);
    // const [isFormInvalid, setIsFormInvalid] = useState(false);


    return (
        <Box className="sell-item-page"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form autoComplete="off" onSubmit={handleSubmit}>
                <p>Give more details about the apparel you want to sell</p>
                <TextField
                    id="customer-name"
                    label="Customer Name"
                    type="input"
                    autoComplete="off"
                    variant="standard"
                    fullWidth
                    required
                />
                <TextField
                    id="phone-number"
                    label="Phone Number"
                    type="telephone"
                    autoComplete="off"
                    variant="standard"
                   
                    required
                />
                <TextField
                    id="emailid"
                    label="Email Id"
                    type="email"
                    autoComplete="off"
                    variant="standard"
                    required
                />
                <TextField
                    id="address"
                    label="Address"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    required
                />
                <TextField
                    id="product-name"
                    label="Product Name"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    required
                />
                <TextField
                    id="product-description"
                    label="Product Description"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    required
                />
                <TextField
                    id="product-size"
                    select
                    required
                    defaultValue=""
                    label="Size"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                > {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                        {size}
                    </MenuItem>
                ))}
                </TextField>
                <TextField
                    id="product-category"
                    select
                    required
                    defaultValue=""
                    label="Category"
                    type="text"
                    autoComplete="off"
                    variant="standard"
                    error={isCategoryInvalid}                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="product-age"
                    label="Product Age"
                    type="text"
                    variant="standard"
                    required
                />
                <TextField
                    id="price-quoted"
                    label="Price Quoted"
                    type="text"
                    variant="standard"
                    required
                />
                <br></br>
                <FormLabel id="demo-controlled-radio-buttons-group">Price Negotiable</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={priceNegotiable}
                >
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
                <Button className="submit-btn" sx={{ mt: 1, mr: 1 }} type="submit" onClick={handleSubmit} variant="outlined">
                    Submit
                </Button>
                <Dialog
                    open={dialogOpen}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {result.message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </Box>
    );
}
