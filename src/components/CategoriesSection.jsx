import { useEffect, useState } from 'react'
import './CategoriesSection.css'
import { Link } from 'react-router-dom';

function CategoriesSection() {
    const [categories , setCategories] = useState([]); 

    useEffect(()=>{
      fetch("https://dummyjson.com/products/categories")
        .then((res) => res.json())
        .then((data)=> setCategories(data))
    } ,[])



  return (
    <>
        <h2 className="center-title">Categories</h2>
        <section className="categories">
            {categories.map((categoryObject)=> {
              return (<Link to={`/prodcuts-category/${categoryObject.slug}`} key={categoryObject.slug} className="category-card">{categoryObject.name}</Link>)
            })}
        </section>
    </>
  )
}

export default CategoriesSection
