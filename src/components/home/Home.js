import React from "react";
import { gql, useQuery } from "@apollo/client";

import ProductsList from "../ProductsList/list/ProductsList";

const Home = ({ categoryName }) => {
  const { data, loading, error } = useQuery(PTODUCT_CATEGORY_QUERY, {
    variables: {title:categoryName},
  });


  if(loading) return <p>Loading...</p>
  return (
    <div>
      <ProductsList data={data.category.products} />
    </div>
  );
};
export default Home;

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
