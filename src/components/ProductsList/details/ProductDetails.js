import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { currencyContext } from "../../context/currencyContext";
import React, { useContext } from "react";
import { addCart } from "../../../redux/action/index";
import { useDispatch } from "react-redux";
import "./productDetails.css";

//make ProductDetails after click on Products
//see product sizes,color,price and else...
const ProductDetails = () => {
  const { id } = useParams();
  const [choosenPhoto, setChoosenPhoto] = useState(0);
  const { choosenCurrency } = useContext(currencyContext);
  const [productAttribute, setProductAttributes] = useState({});

  const cartList = (attribute, value) => {
    setProductAttributes((att) => ({
      ...att,
      [attribute]: value,
    }));
  };

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart({ ...product, choosenAttribute: productAttribute }));
  };

  const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS_QUERY, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      <div className="product_img_container">
        <div className="product_img_container_left_side">
          {data.product.gallery.map((img, i) => (
            <img
              className="images"
              key={i}
              src={img}
              alt={i}
              onClick={() => setChoosenPhoto(i)}
            />
          ))}
        </div>
        <div className="product_img_container_right_side">
          <img
            className="products_image_right"
            src={data.product.gallery[choosenPhoto]}
            alt="/"
          />
        </div>
        <div className="type">{data.product.brand}</div>
        <div className="products_text_container">
          <p className="name">{data.product.name}</p>
          {data.product.attributes.map((attribute) => {
            return (
              <div key={attribute.id}>
                <div className="products_sizes_container">
                  <div className="nik">{attribute.name}:</div>
                  {attribute.items.map((item) => {
                    if (attribute.name === "Color") {
                      return (
                        <div
                          onClick={() => cartList(attribute.name, item.value)}
                          className={
                            productAttribute.Color === item.value
                              ? "active_scand scand"
                              : "scand"
                          }
                          key={item.id}
                          style={{ backgroundColor: item.value }}
                        />
                      );
                    }

                    if (productAttribute[attribute.name] === item.value) {
                      return (
                        <div
                          onClick={() => cartList(attribute.name, item.value)}
                          key={item.id}
                          className="products_sizes_container_item active_sizes_container"
                        >
                          <div>{item.value}</div>
                        </div>
                      );
                    }

                    return (
                      <div
                        onClick={() => cartList(attribute.name, item.value)}
                        key={item.id}
                        className="products_sizes_container_item"
                      >
                        <div>{item.value}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <h1 className="price">Price:</h1>
          <p className="amount">
            {`${data.product.prices[choosenCurrency].currency.symbol}`}
            {`${data.product.prices[choosenCurrency].amount}`}
          </p>
          <button
            className="products_button"
            onClick={() => addProduct(data.product)}
          >
            Add To Chart
          </button>
          <h1
            className="description"
            dangerouslySetInnerHTML={{ __html: data.product.description }}
          ></h1>
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
          label
        }
        amount
      }
      brand
    }
  }
`;
