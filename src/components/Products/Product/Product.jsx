import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';

const Product = ({ product, onAddToCart,image }) => {

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div style={{marginTop:100}}>
    <Card sx={{ maxWidth: '100%' }}>
      {/* <CardMedia sx={{
       paddingTop: '56.25%',
       }}  image={product.image}
       title={product.name} /> */}
       <CardMedia component="img" image={product.image?.url} alt={product.name} height="300px" />
      <CardContent>
        <div sx={{display: 'flex',
    justifyContent: 'space-between',}}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
          ₹{product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing sx={{    display: 'flex',
    justifyContent: 'flex-end',}}>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};
Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
