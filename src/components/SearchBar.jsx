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
        setQ(e.target.value);          // 1. update state
        console.log("Typing:", q);  // 2. watch it live
      }}
      placeholder="Search products…"
    />
  );
}