import React from 'react';
import { Query } from 'react-apollo';
import Cookies from 'js-cookie';
import { Redirect } from '@reach/router';
import isNil from 'lodash/isNil';

import Header from '../../components/Header';
import { Container, Main } from '../styles';
import { USER } from './query';

const LoginPage = (props: any) => {
  const token = Cookies.get('token');

  if (isNil(token)) return <Redirect to="/login" noThrow />;

  return (
    <Query query={USER}>
      {queryData => {
        console.log(queryData);
        return (
          <Container>
            <Header />
            <Main>jo</Main>
          </Container>
        );
      }}
    </Query>
  );
};

export default LoginPage;
