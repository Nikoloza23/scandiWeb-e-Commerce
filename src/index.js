import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
        <App />
        </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
