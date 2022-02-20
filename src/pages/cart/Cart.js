import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { delCart } from "../../redux/action/index";
import "./cart.css";
import { currencyContext } from "../../components/context/currencyContext";


//map list of items that you want to buy
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const { choosenCurrency } = useContext(currencyContext);

  const Product = ({ product, index }) => {
    const dispatch = useDispatch();
    const handleClose = (item) => {
      dispatch(delCart(item));
    };

    console.log(product);

    return (
      <div className="cart_container" key={product.id}>
        <button onClick={() => handleClose(product)} className="delete">
          X
        </button>
        <div className="cart_image">
          <img src={product.gallery} alt="/" />
        </div>
        <h3 className="name_cart">{product.name}</h3>
        <h3 className="cart_title">{product.brand}</h3>
        <p className="cart_prices">
          {`${product.prices[(index, choosenCurrency)].currency.symbol}`}
          {`${product.prices[(index, choosenCurrency)].amount}`}
        </p>
        <div className="boxes">
          <div className="cart_id">
            {product.choosenAttribute.Size && (
              <div>Size:{product.choosenAttribute.Size}</div>
            )}
             {product.choosenAttribute.Color && (
               <div
               className="cart_scand"
               style={{ backgroundColor: product.choosenAttribute.Color }}
             />
            )}
          </div>
        </div>
        <div className="icrement">+</div>
        <div className="decrement">-</div>
        <hr className="hr" />
      </div>
    );
  };

  return (
    <div className="cart_grid">
      <h1 className="cart">CART</h1>
      {state.length > 0 &&
        state.map((item, i) => {
          return <Product product={item} index={i} key={item.id} />;
        })}
    </div>
  );
};

export default Cart;
