import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  const { id, gallery, name, description } = data; 

  return (
    <li style={{margin: "10px  0", border: "1px solid black"}}>
      <Link to={`/products/${products.id}`}>
        <h1>{name}</h1>
        <img
          style={{ width: 80, height: 80 }}
          src={gallery[1]}
          alt={description}
        />
      </Link>
    </li>
  );
};


export default ProductItem;


