import React from 'react'
import './created-category.styles.scss'
import Button from '../button/button.component'
import CategoryItem from '../category-item/category-item-component'

const categories = [
  {
    "id": 1,
    "title": "hats",
    "image_url": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "image_url": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "image_url": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "image_url": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "image_url": "https://i.ibb.co/R70vBrQ/men.png"
  },
  ]

const CreatedCategory = () => {
  const handleClick =()=>{

  }
  return (
    <div className='view-categories-container'>
      <Button type='button' otherClass={"create"} onClick={handleClick} > 
          Create Category
      </Button>
      <div className='created-categories'>
        {categories.map(category=>{
          return(
            <div>
              <CategoryItem category={category} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreatedCategory
