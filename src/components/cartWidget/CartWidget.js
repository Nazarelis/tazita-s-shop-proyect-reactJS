import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {totalProducts} = useCartContext();
  return (
    <>
    
      <div style={{display:'flex'}}>
        <ShoppingCartIcon sx={{color: "black"}}/>

        <span style={{color: "black"}}>{totalProducts() || ''}</span>
      </div>

    </>

  )
}

export default CartWidget;