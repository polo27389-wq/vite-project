import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    const storeName = "🛒 Small Store 2";
  
return (
    <>
      <Header storeName={storeName} />
       <main className="pt-20">
        <Outlet />
       </main>
    </>
  )
}
