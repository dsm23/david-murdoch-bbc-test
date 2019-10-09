import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import Heading from '../../atoms/heading';

import getArticleTitles from '../../../graphql/getArticleTitles';

const Home: FunctionComponent<{}> = () => {
  const { data, error, loading } = useQuery(getArticleTitles);

  // https://verekia.com/react/logic-less-jsx/
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <p>ERROR: {error.message}</p>
  ) : (
    <ol>
      {data.articles.map(({ id, title }) => (
        <Heading invariant="li" key={`${id}-${title}`}>
          <Link to={`/${parseInt(id, 10) + 1}`}>{title}</Link>
        </Heading>
      ))}
    </ol>
  );
};

export default Home;
