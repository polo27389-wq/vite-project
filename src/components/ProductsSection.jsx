import './ProductsSection.css'
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ProductsList from './ProductsList';
import { gymProducts } from '../data/gymProducts';

function ProductsSection() {
  let [products, setProducts] = useState([]);
  const [visableProducts , setVisableProducts] = useState(products);

  const [error, setError] = useState(null);
  const [loading , setLoading] = useState(null);


  useEffect(() => {
    setLoading("Loading gym products.....")
    setTimeout(() => {
      setProducts(gymProducts)
      setVisableProducts(gymProducts)
      setLoading(null)
    }, 500)
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
