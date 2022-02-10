import { Link } from "react-router-dom";
import "./productItem.css";

const ProductItem = ({ data }) => {
  const { id, gallery, name, prices } = data;

  return (
    <div className="grid_container">
      <div className="card">
        <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
          <img className="grid_item" src={`${gallery}`} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{`${name}`}</h5>
          <p className="card-text">{`${prices[0].currency.symbol} ${prices[0].amount}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
