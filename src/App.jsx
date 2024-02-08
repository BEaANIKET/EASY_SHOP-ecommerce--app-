
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop'
import Shopcatagory from './pages/Shopcatagory';
import Product from './pages/Product';
import Cart from './pages/cart';
import LoginSignup from './pages/LoginSignuup';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/banner_mens.png'
import women_banner from './component/Assets/banner_women.png'
import kids_banner from './component/Assets/banner_kids.png'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcatagory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<Shopcatagory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<Shopcatagory banner={kids_banner} category='kid'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
  