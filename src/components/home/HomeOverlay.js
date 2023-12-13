import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import { UrlProvider } from "../../provider/domainUrlProvider";

export default function MultiActionAreaCard() {
  const [datas, setData] = useState();
  useEffect(() => {
    fetch(new UrlProvider().getDomainUrl() + '/home')
      .then(async(response) => {
        const productResponse = await response.json()
        console.log("datas", productResponse)
        setData(productResponse)
      })
      .catch(error => console.error(error));
    
  }, []);

  return (
    <div className="cards-shower">
      {datas ? datas.allProducts.map((product) => (
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
              <Button size="small">Add To Cart</Button>
            </CardActions>
          </Card>
        </div>
      )) : <div>Loading</div>}
    </div>
  );
}
