import React, { FunctionComponent, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import PostFormMutation from '../post-form-mutation';

import Article from '../../molecules/article';

import getArticle from '../../../graphql/getArticle';
import getArticles from '../../../graphql/getArticles';

interface Props {
  urlIndex: string;
}

const PostFormQuery: FunctionComponent<Props> = ({ urlIndex }) => {
  const { data, error, loading, client } = useQuery(getArticle, {
    variables: {
      id: parseInt(urlIndex, 10) - 1,
    },
  });

  useEffect(() => {
    client.query({
      query: getArticles,
      variables: {
        skip: 0,
        take: 5,
      },
    });
  }, [client]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <p>ERROR: {error.message}</p>
  ) : (
    data &&
    data.article && (
      <>
        <Article {...data.article} />
        <PostFormMutation urlIndex={urlIndex} />
      </>
    )
  );
};

export default PostFormQuery;
