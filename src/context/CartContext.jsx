import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(); 

export function CartProvider({children}) {
    const [items, setItems] = useState(()=> JSON.parse(localStorage.getItem('cart')) || []);   

    function addToCart(product) {
        setItems(prev => {
        const found = prev.find(i => i.id === product.id);
        if (found) {                            
            return prev.map(i =>
            i.id === product.id ? { ...i, qty: i.qty + 1 } : i
            );
        }
        return [...prev, { ...product, qty: 1 }];   
        });
    }

    function removeFromCart(id) {
        const filteredItems = items.filter((p)=> p.id !== id);
        setItems(filteredItems);
    }

    function decreaseQtyFromCart(id) {
        const found = items.find(item => item.id === id);
        if (found) {
            const qty = found.qty
            if (qty === 1) {
                removeFromCart(id);
                return null;
            } else {
                setItems((prev) =>{
                        return prev.map(item => {
                            return item.id === id ? {...item , qty: item.qty - 1 } : item
                        })
                    }
                )

            }
        }
        
        
    }

    useEffect(()=>{
        localStorage.setItem('cart' , JSON.stringify(items));
    }, [items])

    return (
        <CartContext.Provider value={ {items , addToCart , removeFromCart , decreaseQtyFromCart} }>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);