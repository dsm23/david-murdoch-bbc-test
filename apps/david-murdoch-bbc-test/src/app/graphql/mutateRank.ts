import gql from 'graphql-tag';

const mutation = gql`
  mutation mutateRank($id: Float!, $rank: Float!) {
    rankArticle(id: $id, rank: $rank) {
      id
      rank
      title
    }
  }
`;

export default mutation;
