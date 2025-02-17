import './cart-dropdown.styles.scss'
//import React, { useContext } from 'react'
import Button from '../button/button.component'
//import CartItem from '../cart-item/cart-item.component'
//import { CartContext } from '../../contexts/cart.context'


const CartDropdown = () => {
  
  //const {cartItems,setIsCartOpen,isCartOpen} = useContext(CartContext)
  
  const goToCheckoutHandler = ()=>{
   
  }
//{cartItems.map((item)=>(<CartItem cartitem={item} key={item.id} />))}
  return (
    <div className='cart-dropdown-container'>
     
        <div className='cart-items'> 
        
        </div>
        <Button onClick={goToCheckoutHandler}>Checkout</Button>
        
    </div>
  )
}

export default CartDropdown
//