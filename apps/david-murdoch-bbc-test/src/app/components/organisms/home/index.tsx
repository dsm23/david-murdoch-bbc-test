import React, { FunctionComponent } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import getArticleTitles from '../../../queries/getArticleTitles';

const Home: FunctionComponent<{}> = () => (
  <Query query={gql(getArticleTitles)}>
    {({ data, loading, error }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <p>ERROR: {error.message}</p>;
      return <pre>{JSON.stringify(data, null, 2)}</pre>;
    }}
  </Query>
);

export default Home;
