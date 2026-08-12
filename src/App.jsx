import { Route, Routes } from 'react-router-dom'
import './App.css'
import './responsive.css'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'
import TitleUpdater from './pages/TitleUpdater'
import ProductsCategories from './pages/ProductsCategories'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>  
        <Route path='/' element={<Home />}   />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/prodcuts-category/:category' element={<ProductsCategories/>} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/titleupdate' element={<TitleUpdater />} />

        <Route path='*' element={<NotFound />}   />
      </Route>
    </Routes>
  ) 
}

export default App
