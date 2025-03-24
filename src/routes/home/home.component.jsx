import React, { useEffect, useState } from 'react'
import Directory from '../../components/directory/directory.component'
import { Outlet } from 'react-router-dom'
const Home = () => {
const [categories,setCategories] = useState([])

useEffect(() => {
  // Define the async function inside useEffect
  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/categories');
      const data = await response.json();
      // Do something with the fetched data
      setCategories(data)
      console.log(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Call the fetchCategories function
  fetchCategories();
}, [])
  return (
    <div>
        <Outlet/>
        <Directory categories={categories}/>
    </div>
  )
}

export default Home
