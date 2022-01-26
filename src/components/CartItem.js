import React, { useState ,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useCart } from 'react-use-cart'
//import { useEffect } from 'react/cjs/react.production.min';

export default function CartItem() {
    const [data, setData] = useState([]);
    const datFething= async()=>
    {
     let typeAndValue={
       method:"get",
     };
      let data=await fetch('https://fakestoreapi.com/products',typeAndValue);
      let info=await data.json()
      console.log(info);
      setData(info);
      console.log(data)
    }
 useEffect(() => {
    datFething();   
 }, []);
 
  
    const {addItem}=useCart()
    //const data= data
    return (
        <div className='container-fluid  '>
           
         <div className='col-12 hstack' style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
         {data.map((data)=>
            {
                return(
                    <div  key={data.id} className="card" style={{width: '18rem',margin:'3%',boxShadow:'3px 5px 5px lightGray',textAlign:'center'}}>
                    <img src={data.image} className="card-img-top" alt="products" style={{height:"300px"}}/>
                    <div className="card-body">
                        <p className="card-title">{data.title}</p>
                        <h5 className="card-title"> Price : {data.price}$</h5>
                        <button  onClick={()=>{addItem(data)}} className="btn btn-primary">Add to Cart</button>
                    </div> 
                    </div> 
                )
            })}
      
         </div>
        </div>
    )
}
