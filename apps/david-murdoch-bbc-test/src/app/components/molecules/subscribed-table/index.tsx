import React, { FunctionComponent, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import getRankings from '../../../graphql/getRankings';
import rankSubscription from '../../../graphql/subscribeToRank';

const SubscribedTable = ({ articles, subscribeToMore }) => {
  useEffect(() => {
    subscribeToMore({
      document: rankSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        const newArticle = subscriptionData.data.rankChanged;

        const replaceIndex = newArticle.id;

        return {
          articles: prev.articles.map((item, index) => {
            if (index !== replaceIndex) {
              return item;
            }
            return newArticle;
          }),
        };
      },
    });
  }, [subscribeToMore]);

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

export default SubscribedTable;
