import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import "./checkout-item.styles.scss"
const CheckoutItem = ({ item }) => {
    const { name, imageUrl, price, quantity } = item

    const { decreaseQuantity, increaseQuantity, removeItem } = useContext(CartContext)



    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={() => decreaseQuantity(item)}>
                    &#10094;
                </div>
                <span className='value'> {quantity}</span>
                <div className='arrow' onClick={() => increaseQuantity(item)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(item)}>
                <h4>{"X"}</h4>
            </div>
        </div>
    )
}

export default CheckoutItem
