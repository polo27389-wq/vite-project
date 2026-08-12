import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({id , name="Unknown Title" , price="$999" , image}) {
   const salePrice = (price * 0.99).toFixed(2);
    const { addToCart } = useCart();

    const handelAdding = () =>{
      const product = {
        id:id , 
        title: name,
        price: price,
        image: image
      }
      addToCart(product)
    }

   return (
    <article className="product-card">
      <img src={image} alt="product image" />
      <h3>
        <Link className="hover:text-blue-600" to={`/products/${id}`}>
          {name}
        </Link>
      </h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
        sint mollitia vero eos voluptate
      </p>
      <p>salePrice: ${salePrice}</p>
      <del>Price: ${price}</del>
      <button onClick={handelAdding} className="btn">Add to cart 🛒</button>
    </article>
  );
}

export default ProductCard;
