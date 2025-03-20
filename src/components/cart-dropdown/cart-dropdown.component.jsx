import './cart-dropdown.styles.scss'
//import React, { useContext } from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {
  
  const {cartItems,setCartOpen,isCartOpen} = useContext(CartContext)
  const navigate = useNavigate();
  console.log(cartItems)
  const goToCheckoutHandler = ()=>{
      navigate('/checkout')
      setCartOpen(!isCartOpen)
  }
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'> 
          {cartItems.map((item)=>(<CartItem cartitem={item} key={item.id} />))}
        </div>
        <Button onClick={goToCheckoutHandler}>Checkout</Button>   
    </div>
  )
}

export default CartDropdown
//