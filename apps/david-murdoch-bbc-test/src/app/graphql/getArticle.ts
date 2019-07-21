import gql from 'graphql-tag';

const query = gql`
  query getArticle($id: Float!) {
    article(id: $id) {
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
