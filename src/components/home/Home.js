import React from "react";
import { gql, useQuery } from "@apollo/client";
import Header from "../home/header/Header";
import ProductsList from "../ProductsList/list/ProductsList";

const PTODUCT_CATEGORY_QUERY = gql`
  query nick($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        gallery
        description
        attributes {
          type
        }
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

//make filtration to products:ALL,CLOTHES,TECH
const Home = ({ categoryName }) => {
  const { data, loading, error } = useQuery(PTODUCT_CATEGORY_QUERY, {
    variables: { title: categoryName },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Erorr...</p>;
  return (
    <div>
      <Header />
      <ProductsList data={data.category.products} />
    </div>
  );
};
export default Home;
