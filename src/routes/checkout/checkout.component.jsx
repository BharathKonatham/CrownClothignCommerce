import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'
import CheckoutItem from '../../components/checkout-item/checkoutItem.component'

const Checkout = () => {
    const { cartItems } = useContext(CartContext)
    return (
        <div>
            {cartItems.map(item => {
                return (
                    <React.Fragment key={item.id}>
                        <CheckoutItem item={item} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Checkout
