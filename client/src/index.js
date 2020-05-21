import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//set up
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

//provider
import {ApolloProvider} from 'react-apollo'

//route
import { BrowserRouter as Router } from 'react-router-dom'


const cache = new InMemoryCache({
  dataIdFromObject: o => o.id,
  addTypename: true
});
const link = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
