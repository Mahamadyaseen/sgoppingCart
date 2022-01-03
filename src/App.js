
import './App.css';
//import Nav from './components/NavBar'
import CartItem from './components/CartItem';
import CartPopUp from './components/CartPopUp';
import React,{useState} from 'react';
import {CartProvider, useCart} from "react-use-cart";
import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom';

function App() {
  
  
  
  return (
    <BrowserRouter>
    <div className="App">
      <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><strong><em>Shopping-Cart</em></strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav mr-6">
        <NavLink className="nav-link" to="/">
         Home
        </NavLink>
       <NavLink className="nav-link" to="/cart">
         My Cart
       </NavLink>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    
      
      <CartProvider>
     <Routes>
       <Route path="/" element={ <CartItem/>}/>
      
       <Route path="/cart" element={ <CartPopUp/>}/>
      
      </Routes>
      </CartProvider>
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;
