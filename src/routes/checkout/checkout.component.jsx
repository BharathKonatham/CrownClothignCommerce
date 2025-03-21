import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import CheckoutItem from '../../components/checkout-item/checkoutItem.component'
import './checkout.styles.scss'
const Checkout = () => {
    const { cartItems,cartTotal } = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartItems.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <CheckoutItem item={item} />
                    </React.Fragment>
                )
            })}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}

export default Checkout
