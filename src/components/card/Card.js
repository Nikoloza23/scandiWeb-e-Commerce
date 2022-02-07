import React from 'react'
import './card.css'

function Card({products}){
  return(
  <div className="card w-25">
  <img  src={`${products.gallery}?q=${products.id}`} alt="products"/>
  <div className="card-body">
  <h5 className="card-title, mb-0" >{`${products.name}`}</h5>
       <p className="card-text">
         {`${products.type}`} 
       </p>

      <h6 className="card-subtitle text-muted">CLOTHES</h6>
      <p className="card-text"></p>

   </div>
 </div>
  )
}

export default Card;




