import React from 'react'

const  Card = ( { products } ) =>{
    return (
        <div className="card w-25">
         <img src={`${products.gallery}?q=${products.id}`} alt="products" />
         <div className="card-body">
         <h5 className="card-title, mb-0">{products.name}</h5>
              <p className="card-text">
                {products.prices} 
              </p>

              <h6 className="card-subtitle text-muted">Lok</h6>
        </div>
        </div>
    );
}

export default Card;
