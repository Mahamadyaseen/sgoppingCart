import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';

export default function Navbar(props) {
    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        totalItems,
        emptyCart,
        cartTotal,
        removeItem,
      } = useCart();
  return <div>
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
         Products
        </NavLink>
       <NavLink className="nav-link" to="/cart">
         Cart<sup style={{fontSize:'15px',color:'red'}}>{totalItems}</sup>
       </NavLink>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
  </div>;
}