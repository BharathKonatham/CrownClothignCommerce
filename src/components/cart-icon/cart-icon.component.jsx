import './cart-icon.styles.scss'
import{ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../contexts/cartContext'
import { useContext,useEffect } from 'react'

const CartIcon = ()=>{
    
    const {isCartOpen,setCartOpen,cartCount} = useContext(CartContext)


    const displayCart = ()=>{
        setCartOpen(!isCartOpen)
        }
    return (
        <div className='cart-icon-container' onClick={displayCart}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}
export default CartIcon