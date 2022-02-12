import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
 import "../node_modules/font-awesome/css/font-awesome.min.css";
import { client } from "../src/ApolloClient/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import {Provider} from 'react-redux'
import store  from '../src/redux/reducer/store/store'


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
      <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);  
