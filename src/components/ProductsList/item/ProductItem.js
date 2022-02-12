import { Link } from "react-router-dom";
import "./productItem.css";


const ProductItem = ({ data }) => {
  const { id, gallery, name, prices } = data;

  return (
    <div className="cards-container">
      <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
        <div className="card">
          <img className="grid_item" src={`${gallery}`} alt="/" />
          <div className="card-body">
            <h5 className="card-title">{`${name}`}</h5>
            <p className="card-text">{`${prices[0].currency.symbol} ${prices[0].amount}`}</p>
          </div>
        </div> 
      </Link>
    </div>
  );
};

export default ProductItem;
