import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import isNil from 'lodash/isNil';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './containers/App';
import Globals from './Globals';
import * as serviceWorker from './serviceWorker';

const accessToken = Cookies.get('token'); // get the accessToken token from the Cookies if it exists
const headers = !isNil(accessToken)
  ? {
      authorization: `Bearer ${accessToken}`,
    }
  : {};
const link = createHttpLink({
  uri: 'https://kassenbuch-prisma.herokuapp.com/',
  headers,
});
export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Globals>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Globals>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
