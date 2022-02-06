import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider,ApolloClient,InMemoryCache} from '@apollo/client'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './components/redux/store/store';

const client = new ApolloClient({
  uri:"http://localhost:4000/",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
