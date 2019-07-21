import gql from 'graphql-tag';

const query = gql`
  query getRankings {
    articles {
      id
      rank
      title
    }
  }
`;

export default query;
