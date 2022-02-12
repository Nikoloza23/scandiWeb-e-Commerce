import React from 'react'
import './header.css'
import gql from "graphql-tag";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";


const GET_PRODUCT_DETAILS_QUERY = gql`
  query ($id: String!) {
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



const Header = () =>{
    return(
      <div className="App">
      <header>
           <h2>Category Name</h2>
      </header>
      </div>
    );
}

export default Header;