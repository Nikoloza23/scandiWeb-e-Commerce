import React from "react";
import { Link } from "react-router-dom";

//Take home page data
const Card = ({ products }) =>{
return (
     <header>
      <div className="card">
        <Link to={`/products/${products.id}`} style={{ textDecoration: "none" }}>
          <img
            src={`${products.gallery + "?q=" + products.id}`}
            alt="products"
          />
          <div className="card-body">
            <h5 className="card-title">{`${products.name}`}</h5>
            <p className="card-text">{`${products.prices[0].currency.symbol} ${products.prices[0].amount}`}</p>
          </div>
        </Link>
      </div>
      </header>
  );
}

export default Card; 