import './ProductsSection.css'
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ProductsList from './ProductsList';

function ProductsSection() {
  let [products, setProducts] = useState([]);
  const [visableProducts , setVisableProducts] = useState(products);

  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(null);


  useEffect(() => {
    setLoading("Loading data from backend.....")
    fetch('https://dummyjson.com/products').then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json()
      } else {
        setError("BackEnd can't found the data")
        return []
      }
    }).then((data) => {
      setProducts(data.products)
      setVisableProducts(data.products)
      setLoading(null)
    } )


  }, [])

  if (error) {
    return (
      <section className="products">
        <h2 className="center-title">Products</h2>
        <div className="products-continer">
          {error}
        </div>
      </section>

    )
  }

   if (loading) {
    return (
      <section className="products">
        <h2 className="center-title">Products</h2>
        <div className="products-continer">
          {loading}
        </div>
      </section>

    )
  }

  return (
    <section className="products">
      <h2 className="center-title">Products</h2>
      <div>
        <SearchBar products={products} setVisableProducts={setVisableProducts} />
      </div>
      <ProductsList products={visableProducts} />
    </section>
  )
}

export default ProductsSection
