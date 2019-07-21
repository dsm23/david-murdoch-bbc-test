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

import getRankings from '../../../graphql/getRankings';
import rankSubscription from '../../../graphql/subscribeToRank';

const DavidTest = ({ articles, refetch, subscribeToMore }) => {
  useEffect(() => {
    subscribeToMore({
      document: rankSubscription,
      updateQuery: () => refetch(),
    });
  }, [articles, subscribeToMore]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Article Title</TableCell>
          <TableCell align="right">Rank (/10)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {articles.map(({ title, rank }) => (
          <TableRow key={title}>
            <TableCell component="th" scope="row">
              {title}
            </TableCell>
            <TableCell align="right">{rank}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const RankingsBoard: FunctionComponent<{}> = () => (
  <>
    <Headline script={latin} service="news">
      Rankings Board
    </Headline>
    <Query query={getRankings}>
      {({ data, loading, error, refetch, subscribeToMore }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <p>ERROR: {error.message}</p>;
        return (
          <DavidTest
            articles={data.articles}
            refetch={refetch}
            subscribeToMore={subscribeToMore}
          />
        );
      }}
    </Query>
  </>
);

export default RankingsBoard;
