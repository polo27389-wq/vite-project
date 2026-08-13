import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    const storeName = "� FitHub Gym Store";
  
return (
    <>
      <Header storeName={storeName} />
       <main className="pt-20">
        <Outlet />
       </main>
    </>
  )
}
