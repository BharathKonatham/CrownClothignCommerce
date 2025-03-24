import React from 'react'
import './created-product.styles.scss'
import Button from '../button/button.component'
const CreatedProduct = () => {

  const handleClick =()=>{

  }
  return (
    <div className='view-products-container'>
        <Button type='button' otherClass={"create"}onClick={handleClick} > 
          Create product
      </Button>
      <div className='created-products'>

      </div>
    </div>
  )
}

export default CreatedProduct
