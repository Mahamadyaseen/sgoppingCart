import React from 'react'
import { useCart } from 'react-use-cart'
import data from './data'
export default function CartItem() {

    const {addItem}=useCart()
    //const data= data
    return (
        <div className='container-fluid  '>
           
         <div className='col-12 hstack' style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
            {data.map((data)=>
            {
                return(
                    <div  key={data.id} className="card" style={{width: '18rem',margin:'3%',boxShadow:'3px 5px 5px lightGray'}}>
                    <img src={data.imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <h5 className="card-title"> Price : {data.price}$</h5>
                        <button onClick={()=>{addItem(data)}} className="btn btn-primary">Add to Cart</button>
                    </div> 
                    </div> 
                )
            })}
       
         </div>
        </div>
    )
}
