import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
 import "../node_modules/font-awesome/css/font-awesome.min.css";
import { client } from "../src/ApolloClient/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>   
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);  
