import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delCart } from "../../redux/action/index";
import "./cart.css";




const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };



  const product = (product) => {
   
    return (
      <header >
            <div className="cart_container">
            <h1 className="cart">CART</h1>
                <div className="cart_name">
                 <button className="delete" onClick={() => handleClose(product)}>X </button>
                  <h3 className="name_cart">NAME</h3>
                  <h4 className="cart_title">SURNAME</h4>
                </div>
              </div>
              <div>
                <div className="cart_price">$50.00</div>
                <div className="boxes">
                  <div className="cart_box">S</div>
                  <div className="cart_box2">M</div>
                </div>
                <div className="icrement">+</div>
                <div className="decrement">-</div>
              </div>
      </header>
    

    );
  };

  return <>{state.length !== 0 && state.map(product)}</>;
};

export default Cart;
