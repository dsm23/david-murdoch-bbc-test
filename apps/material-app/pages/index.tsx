import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag';

const query = gql`
  query getArticleTitles {
    articles {
      id
      title
    }
  }
`;

const Index: FunctionComponent<{}> = () => {
  const { data, error, loading } = useQuery(query);

  // https://verekia.com/react/logic-less-jsx/
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <p>ERROR: {error.message}</p>
  ) : (
    <ol>
      {data.articles.map(({ id, title }) => (
        <li key={`${id}-${title}`}>
          <Link to={`/${parseInt(id, 10) + 1}`}>{title}</Link>
        </li>
      ))}
    </ol>
  );
};

export default Index;
