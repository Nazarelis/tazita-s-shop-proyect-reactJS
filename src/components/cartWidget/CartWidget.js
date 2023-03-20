import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

let cantidadEnCart= 0;

const CartWidget = () => {
  return (
    <div style={{display:'flex'}}>
      <ShoppingCartIcon sx={{color: "black"}}/>
      <span style={{color: "black"}}>{cantidadEnCart}</span>
    </div>
  )
}

export default CartWidget;