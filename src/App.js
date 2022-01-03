
import './App.css';
import Nav from './components/NavBar'
import CartItem from './components/CartItem';
import CartPopUp from './components/CartPopUp';
import React,{useState} from 'react';
import {CartProvider} from "react-use-cart";
function App() {
  
  return (
    <div className="App">
     <CartProvider>
     <Nav />
      <div className='container ' style={{display:'flex',flexDirection:'column'}} >
      <div>
        <CartItem/>
      </div>
      <div>
      <CartPopUp/>
      </div>
      </div>
      
     </CartProvider>
    </div>
  );
}

export default App;
