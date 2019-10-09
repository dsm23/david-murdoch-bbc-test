import React, { FunctionComponent, useEffect } from 'react';
import { Query } from 'react-apollo';
import { Headline } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import SubscribedTable from '../../molecules/subscribed-table';

import getRankings from '../../../graphql/getRankings';
import rankSubscription from '../../../graphql/subscribeToRank';

const RankingsBoard: FunctionComponent<{}> = () => (
  <>
    <Headline script={latin} service="news">
      Rankings Board
    </Headline>
    <Query query={getRankings}>
      {({ data, loading, error, subscribeToMore }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <p>ERROR: {error.message}</p>;
        return (
          <SubscribedTable
            articles={data.articles}
            subscribeToMore={subscribeToMore}
          />
        );
      }}
    </Query>
  </>
);

export default RankingsBoard;
