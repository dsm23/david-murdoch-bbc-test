import React, { FunctionComponent } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Headline } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import getRankings from '../../../queries/getRankings';

const RankingsBoard: FunctionComponent<{}> = () => (
  <>
    <Headline script={latin} service="news">
      Rankings Board
    </Headline>
    <Query query={gql(getRankings)} pollInterval={500}>
      {({ data, loading, error }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <p>ERROR: {error.message}</p>;
        return (
          <Table>
            <TableHead>
              <TableCell>Article Title</TableCell>
              <TableCell align="right">Rank (/10)</TableCell>
            </TableHead>
            <TableBody>
              {data.articles.map(({ title, rank }) => (
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
      }}
    </Query>
  </>
);

export default RankingsBoard;
