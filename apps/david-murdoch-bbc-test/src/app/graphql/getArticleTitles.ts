import gql from 'graphql-tag';

const query = gql`
  query getArticleTitles {
    articles {
      id
      title
    }
  }
`;

export default query;
