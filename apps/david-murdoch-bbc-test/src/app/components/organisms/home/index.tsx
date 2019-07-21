import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import Heading from '../../atoms/heading';

import getArticleTitles from '../../../graphql/getArticleTitles';

const Home: FunctionComponent<{}> = () => (
  <Query query={getArticleTitles}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <p>ERROR: {error.message}</p>;
      return (
        <ol>
          {data.articles.map(({ id, title }) => (
            <li key={`${id}-${title}`}>
              <Link to={`/${parseInt(id, 10) + 1}`}>
                <Heading>{title}</Heading>
              </Link>
            </li>
          ))}
        </ol>
      );
    }}
  </Query>
);

export default Home;
