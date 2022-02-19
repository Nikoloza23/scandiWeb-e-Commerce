import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delCart } from "../../redux/action/index";
import "./cart.css";
import { currencyContext } from "../context/currencyContext";

const Cart = () => {
  const [counter, setCounter] = useState(true);
  
  const state = useSelector((state) => state.handleCart);
  const { choosenCurrency } = useContext(currencyContext);

  const Product = ({ product, index }) => {
    const dispatch = useDispatch();
      const handleClose = (item) => {
      dispatch(delCart(item));
      
  };
  
  
    
    const increase = () => {
      setCounter((count) => count + 1);
    };

    const decrease = () => {
      setCounter((count) => count - 1);
    };



    return (
      <div className="id" key={product.id}>
        <div className="cart_container">
          <button onClick={() => handleClose(product)} className="delete">
            X
          </button>
          <h1 className="cart">CART</h1>

          <div className="cart_image">
            <img src={product.gallery} alt="/" />
          </div>
          <h3 className="name_cart">{product.name}</h3>
          <h3 className="cart_title">{product.brand}</h3>
          <p className="cart_prices">
            {counter}
            {`${product.prices[(index, choosenCurrency)].currency.symbol}`}
            {`${product.prices[(index, choosenCurrency)].amount}`}
          </p>
          <div className="boxes">
            <div className="cart_id">{product.attributes[0].id}:</div>
            {/* <div className="cart_box">-</div> */}
            {/* <div className="cart_box2">M</div> */}
          </div>
          <div className="icrement" onClick={increase}>
            +
          </div>
          <div className="decrement" onClick={decrease}>
            -
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length !== 0 &&
        state.map((item, i) => {
          return <Product product={item} index={i} key={item.id} />;
        })}
    </div>
  );
};

export default Cart;
