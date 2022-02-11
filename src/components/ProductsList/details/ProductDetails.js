import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [choosenPhoto, setChoosenPhoto] = useState(0);


  const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS_QUERY, {
    variables: { id },
  });

  console.log("data", data);

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <div className="product_img_container">
        <div className="product_img_container_left_side">
          {data.product.gallery.map((img, i) => (
            <img className="images" key={i} src={img} alt={i} onClick={() => setChoosenPhoto(i)} />
          ))}
        </div>
        <div className="product_img_container_right_side">
          <img 
            className="products_image_right"
            src={data.product.gallery[choosenPhoto]}
          />
        </div>
        <div className="products_text_container">
          <p className="name">{data.product.name}</p>
          <h1 className="text">{data.product.attributes.type}</h1>
          <div className="nik">SIZE:</div>
          <div className="products_sizes_container">
            <div className="products_sizes_container_item">XS</div>
            <div className="products_sizes_container_item">S</div>
            <div className="products_sizes_container_item">M</div>
            <div className="products_sizes_container_item">L</div>
          </div>
          <h1 className="price">Price:</h1>
          <p className="amount">{`${
            data.product.prices[0].currency.symbol +
            data.product.prices[0].amount
          }`}</p>
          <button className="products_button">Add Yo Chart</button>
          <h1 className="description">{data.product.description}</h1>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

const GET_PRODUCT_DETAILS_QUERY = gql`
  query getProductDetails($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          id
          value
          displayValue
        }
      }
      prices {
        currency {
          symbol
        }
        amount
      }
      brand
    }
  }
`;
