import gql from 'graphql-tag';

export const USER = gql`
  query USER {
    me {
      id
      firstName
      lastName
      email
      entries {
        id
        amount
        currency
      }
    }
  }
`;
