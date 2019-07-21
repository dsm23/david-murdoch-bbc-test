import gql from 'graphql-tag';

const subscription = gql`
  subscription {
    rankChanged {
      id
      rank
      title
    }
  }
`;

export default subscription;
