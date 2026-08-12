import ProductCard from './ProductCard';

export default function ProductsList({ products }) {
  
   function productObjToJSX(product) {
    const { title, price, category, id, rating, images } = product;
    return <ProductCard key={id} id={id} name={title} price={price} category={category} rating={rating} image={images[0]} />
  }

    return (
    <div className="products-continer">
        {products.length === 0 ? <h2 className='center-title'>Products is Empty</h2> :
          products.map(productObjToJSX)
        }
    </div>
  )
}
