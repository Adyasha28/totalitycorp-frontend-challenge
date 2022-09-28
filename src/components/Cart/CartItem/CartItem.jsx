import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item" sx={{ maxWidth: '100%' }}>
      <CardMedia component="img" image={item.image?.url} alt={item.name} height="260px" /> 

      {/* <img src={item.image?.url} alt={item.name} height="300px" width="350px" /> */}

      <CardContent sx={{    display: 'flex',
    justifyContent: 'space-between',}}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between'}}>
        <div sx={{ display: 'flex',
        alignItems: 'center', }}>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>

        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
      </CardActions>
    </Card>
  );
};
CartItem.propTypes = {
  product: PropTypes.object,
}
export default CartItem;