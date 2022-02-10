import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchedData } from "../routes/list/fetchedData";
import "./productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  console.log({ id });

  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const data = fetchedData[0].data.category.products;

  useEffect(() => {
    const desiredProduct = data.find((product) => product.id === id);
    const { name, gallery, description, prices, symbol } = desiredProduct;

    setProduct({ name, description, prices, symbol, imgSrc: gallery });
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          <div className="product_img_container">
            <div className="product_img_container_left_side">
              <img className="products_image_left" src={product.imgSrc[1]} />
              <img className="products_image_left" src={product.imgSrc[2]} />
              <img className="products_image_left" src={product.imgSrc[3]} />
            </div>
            <div className="product_img_container_right_side">
              <img className="products_image_right" src={product.imgSrc[4]} />
            </div>
            <div className="products_text_container">
              <p>{product.name}</p>
              <h2>{`${product.prices[0].amount}`}</h2>
              <div>SIZE:</div>
              <div className="products_sizes_container">
                <div className="products_sizes_container_item">5</div>
                <div className="products_sizes_container_item">5</div>
                <div className="products_sizes_container_item">5</div>
                <div className="products_sizes_container_item">5</div>
              </div>
              <button className="products_button">Add Yo Chart</button>
              <h1>{product.description}</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
