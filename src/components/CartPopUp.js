import React from 'react'
import { useLocation } from 'react-router-dom';
import { useCart } from 'react-use-cart'

export default function CartPopUp(props) {
  
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
    
      if (isEmpty) return <div>
          <img src='https://cdn.dribbble.com/users/324185/screenshots/15805709/media/98798b7662d8a4b21cb66ad4bd430b48.jpg?compress=1&resize=800x600' alt="image"/>

          <h5>Your Cart Is empty</h5>
      </div>;
    
      return (
        <>
        <div className='container' style={{textAlign:'center'}}>
         <h2>U r Cart</h2>
         </div>
         <div className='container' style={{textAlign:'start'}}>
         <h5>Cart ({totalUniqueItems}) Total items ({totalItems})</h5>
         </div>
          
    
          <table  className="table table-light table-hover " style={{boxShadow:'5px 5px 5px lightGray'}}>
          <tbody>
              <tr>
                  <th>
                      Image
                  </th>
                  <th>
                      Item name
                  </th>
                  <th>
                      Price
                  </th>
                  <th>
                      Quantity
                  </th>
                  <th>
                      Add /Remove item
                  </th>
              </tr>
            {items.map((item) => (
           
                 <tr key={item.id}>
                <td>
                    <img style={{width:'100px',height:'100px'}} src={item.imageUrl}/>
                </td>
                <td >
                    {item.name}
                </td>
                <td>
                    {item.price*item.quantity}
                </td>
                <td>
                    {item.quantity}
                </td>
                <td>
                <button className='btn btn-primary mx-2'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                
                <button className='btn btn-primary mx-2'
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                
                <button className='btn btn-danger ' onClick={() => removeItem(item.id)}>&times;</button>
                </td>
               
             </tr>
             
            ))}
            </tbody>
          </table>
          <div className='col-auto ms-auto'>
              <h4>Total Price $ {cartTotal}</h4>
              <button className='btn btn-lg btn-danger' onClick={emptyCart}>Clear Cart</button>
              
              </div>
        </>
      );
    }
