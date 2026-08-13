import { useEffect, useState } from "react";

export default function SearchBar({ products , setVisableProducts}) {
  const [q, setQ] = useState("");

  function filterByTitle(search) {
    setVisableProducts(products.filter((p)=> p.title.includes(search)))
  }

  useEffect(()=>{
    filterByTitle(q)
  }, [q])

  return (
    <input
      value={q}
      onChange={(e) => {
        setQ(e.target.value);          
        console.log("Typing:", q);  
      }}
      placeholder="Search products…"
    />
  );
}