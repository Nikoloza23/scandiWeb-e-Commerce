import React from "react";
import "./card.css";

function Card({ products }) {
  return (
      <div className="card w-25">
        <img src={`${products.gallery}?q=${products.id}`} alt="products" />
        <div className="card-body">
          <h5 className="card-title, mb-0">{`${products.name}`}</h5>
          <p className="card-text">{`${products.prices[0].currency.symbol} ${products.prices[0].amount}`}</p>
          <h6 className="card-subtitle text-muted"></h6>
        </div>
      </div>
  );
}

export default Card;
