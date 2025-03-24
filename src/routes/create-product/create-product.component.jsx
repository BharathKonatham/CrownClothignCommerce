import React from 'react'
import './create-product.styles.scss'
import CreatedCategory from '../../components/created-category/created-category.component'
import CreatedProduct from '../../components/created-product/created-product.component'
const CreateProduct = () => {
  return (
    <div className='create-products-container'>
      <CreatedCategory />
      <CreatedProduct /> 
    </div>
  )
}

export default CreateProduct
