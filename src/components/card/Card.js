import React from 'react'
import './card.css'

function Card({products}){
  return(
  <div className="card w-25">
  <img  src={`${products.gallery}?q=${products.id}`} alt="products"/>
  <div className="container">
  <h4>{products.name}</h4>
       <p>
         {products.prices} 
       </p>
   </div>
 </div>
  )
}

export default Card;




