import { useContext } from "react";
import { Link } from "react-router-dom";
import "./productItem.css";
import { currencyContext } from "../../../context/currencyContext";

//Take data from Graphql
const ProductItem = ({ data }) => {
  const { id, gallery, name, prices } = data;

  const { choosenCurrency } = useContext(currencyContext);

  return (
    <div className="cards-container">
      <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
        <div className="card">
          <img className="grid_item" src={`${gallery}`} alt="/" />
          <div className="card-body">
            <h5 className="card-title">{`${name}`}</h5>
            <p className="card-text">{`${prices[choosenCurrency].currency.symbol} ${prices[choosenCurrency].amount}`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
