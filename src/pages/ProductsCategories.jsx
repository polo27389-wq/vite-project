import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

export default function ProductsCategories() {
    const [prodcuts , setProdcuts] = useState([]);

    const { category } = useParams();
    
    useEffect(()=>{
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data)=> setProdcuts(data.products))
    } ,[])



  return (
    <div>
     <h2 className="center-title">Prodcut from category : {category} </h2>
        <ProductsList products={prodcuts}  />
    </div>
  )
}
