import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_GB';
import 'rc-pagination/assets/index.css';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Article from '../../molecules/article';

import getArticle from '../../../queries/getArticle';

const Post: FunctionComponent<RouteComponentProps> = ({
  history,
  match: {
    params: { urlIndex },
  },
}) => {
  const onChange = value => history.push(`/${value}`);
  return (
    <>
      <Pagination
        onChange={onChange}
        current={parseInt(urlIndex, 10)}
        total={5}
        pageSize={1}
        locale={localeInfo}
      />
      <Query
        query={gql(getArticle)}
        variables={{ id: parseInt(urlIndex, 10) - 1 }}
      >
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <p>ERROR: {error.message}</p>;
          // return <pre>{JSON.stringify(data.article.body, null, 2)}</pre>;
          return data && data.article ? (
            <Article body={data.article.body} title={data.article.title} />
          ) : null;
        }}
      </Query>
    </>
  );
};

export default Post;
