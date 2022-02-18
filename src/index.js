import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { client } from "../src/ApolloClient/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import CurrencyContextProvider from "./components/context/currencyContext";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <CurrencyContextProvider>
        <Provider store={store}> 
          <App />
          </Provider>
        </CurrencyContextProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
