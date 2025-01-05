
import './App.css';
import React, {useState, useEffect } from 'react'
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import BlogList from './components/BlogList';
import Testimonial from './components/Testimonial';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CartPage from './pages/CartPage';
import { FaShoppingCart } from "react-icons/fa";

function App() {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  

  return (
    <BrowserRouter>
    <nav>
        
    <Link to="/cart">
          <FaShoppingCart />
          {totalQuantity > 0 && (
            <span>
              <span>({totalQuantity})</span>
            </span>
          )}
        </Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home addToCart={addToCart}/>}/>
      <Route path='/Contact.html' element={<Contact/>}/>
      <Route path='/About.html' element={<About/>}/>
      <Route path='/Product.html' element={<Products addToCart={addToCart}/>}/>
      <Route path='/Blog_List.html' element={<BlogList/>}/>
      <Route path='/Testimonial.html' element={<Testimonial/>}/>
      <Route path="/cart" element={<CartPage cart={cart} totalPrice={totalPrice}  />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
