import './product-card.styles.scss'

import Button from '../button/button.component'
import { CartContext } from '../../contexts/cartContext'
import { useContext } from 'react'



const ProductCard = ({product})=>{
    const {name,price,imageUrl} = product
    const {addItemToCart} = useContext(CartContext)

    const addItem=()=>{
        addItemToCart(product)
    }
    return (
        <div className='product-card-container'>
            <img src= {imageUrl} alt={`${name}`} />
            
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <Button buttonType='inverted' onClick={addItem}>Add to cart</Button>
        </div>
    )
}

export default ProductCard