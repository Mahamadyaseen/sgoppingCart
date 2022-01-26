
import './App.css';


import React,{useState} from 'react';
import {CartProvider, useCart} from "react-use-cart";
import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loading from './components/Loading';

function App() {
  let Products=React.lazy(()=>import('./components/CartItem'))
  let CartItem=React.lazy(()=>import('./components/CartPopUp'))
  
  
  return (
    <BrowserRouter>
    <div className="App">
   
    
      
      <CartProvider>
      <Navbar/>
    <React.Suspense fallback={<Loading/>}>
    <Routes>
       <Route path="/" element={ <Products/>}/>
      
       <Route path="/cart" element={ <CartItem/>}/>
      
      </Routes>
    </React.Suspense>
      </CartProvider>
     
     
    </div>
    </BrowserRouter>
  );
}

export default App;
