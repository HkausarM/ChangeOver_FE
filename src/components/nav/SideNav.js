import React, { useState, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import { UrlProvider } from "../../provider/domainUrlProvider";
import SellItemPage from "../home/sellItem"

export default function ClippedDrawer() {
  
  const [datas, setData] = useState();
  const [title, setTitle] = useState(); 
  const [page, setPage] = useState('');

  const drawerWidth = 240;

const navItems = ['Buy', 'Sell', 'About Us']; 
const sideNavItems = ['All Products','Men', 'Women', 'Kids', 'On Sale']; 
  const handleLogin = () => {
    console.log('account icon clicked')
  }

  const handleCart = () => {
    console.log('cart icon clicked')
  }

  const handleOption = (i) => {
    setPage(i)
  }

  const handleSideMenuOption = (i) => {
    console.log('sideoption', i)
    if(i !== 'On Sale' && i !== 'All Products')
    {
      console.log("1st if")
    fetch(new UrlProvider().getDomainUrl() + '/category/'+ i)
    .then(async(response) => {
      const productResponse = await response.json()
      setData(productResponse.categoryProducts)
      setTitle(i)
    })
    .catch(error => console.error(error));
  } else if( i == 'On Sale')
  {
    console.log("onsale")
    fetch(new UrlProvider().getDomainUrl() + '/home')
      .then(async(response) => {
        const productResponse = await response.json()
        setData(productResponse.saleProducts)
      })
      .catch(error => console.error(error));
      setTitle(i)
  }
  else if ( i == 'All Products')
  {
    console.log("allprod")
    fetch(new UrlProvider().getDomainUrl() + '/home')
    .then(async(response) => {
      const productResponse = await response.json()
      console.log(productResponse)
      setData(productResponse.allProducts)
      setTitle('All Products')
    })
    .catch(error => console.error(error));
  }
  }

  useEffect(() => {
    setPage('Buy')
    fetch(new UrlProvider().getDomainUrl() + '/home')
      .then(async(response) => {
        const productResponse = await response.json()
        setData(productResponse.allProducts)
        setTitle('All Products')
      })
      .catch(error => console.error(error));
    
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ChangeOver
          </Typography>
          {/* <SearchAppBar /> */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button className="topnav-buttons" key={item} sx={{ color: '#fff'}} onClick={event => handleOption(item)}>
                {item}
              </Button>
            ))}
            <IconButton
            className="topnav-buttons"
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleLogin}
            >
              <AccountCircle />
            </IconButton>
            <IconButton
            className="topnav-buttons"
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              onClick={handleCart}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {sideNavItems.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton className="buttons" onClick={event => handleSideMenuOption(text)}>
                  {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      {page === ('Buy' || '') && 
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div>
        <Typography variant="h6" sx={{ marginBottom: 3, marginLeft: 4}}>{title}
        </Typography>
        <div className="cards-shower">
      {datas ? datas.map((product) => (
        <div className="cards-details">
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt={product.ProductName}
              height="140"
              image={product.ImgLink}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.ProductName}
              </Typography>
               <Typography gutterBottom variant="h6" component="div">
                {'€'+product.Price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="topnav-buttons" size="small">Add To Cart</Button>
            </CardActions>
          </Card>
        </div>
      )) : <div>Loading</div>}
    </div></div>
      </Box>}
      <Box>
{(page === 'Sell') &&
    <SellItemPage/>
      }
    </Box>
    </Box>
  );
}
