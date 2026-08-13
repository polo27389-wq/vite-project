import ProductCard from './ProductCard';

export default function ProductsList({ products }) {
  
  function productObjToJSX(product) {
    const { title, price, category, id, rating, images } = product;
    return <ProductCard key={id} id={id} name={title} price={price} category={category} rating={rating} image={images[0]} />
  }

 
  const productsPerRow = 4;
  const rows = [];
  for (let i = 0; i < products.length; i += productsPerRow) {
    rows.push(products.slice(i, i + productsPerRow));
  }

  if (products.length === 0) {
    return <h2 className='center-title'>Products is Empty</h2>
  }

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="products-section-wrapper">
          <div className="products-continer">
            {row.map(productObjToJSX)}
          </div>
        </div>
      ))}
    </>
  )
}
