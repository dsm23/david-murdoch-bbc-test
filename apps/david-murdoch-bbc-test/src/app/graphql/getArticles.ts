import gql from 'graphql-tag';

const query = gql`
  query getArticles($skip: Int, $take: Int) {
    articles(skip: $skip, take: $take) {
      id
      title
      body {
        type
        model {
          ... on Image {
            url
            altText
            height
            width
          }
          ... on List {
            type
            items
          }
          ... on Typography {
            text
          }
        }
      }
    }
  }
`;

export default query;
