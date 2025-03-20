import React from 'react'
import './directory.styles.scss'
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
export const Directory = () => {//{categories} - use this when spring is running
  return (
    <div className="categories-container">
        {categories.map(category =>(
        <CategoryItem key={category.id} category={category} />
        ))
        }
    </div>
  )
}

export default Directory