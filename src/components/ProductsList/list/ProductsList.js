import ProductItem from "../item/ProductItem";
import "./productList.css";

const ProductsList = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id} style={{ listStyle: "none" }}>
            <ProductItem data={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
