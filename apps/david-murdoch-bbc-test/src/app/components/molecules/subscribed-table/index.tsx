import React, { FunctionComponent } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const SubscribedTable = ({ articles }) => (
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

export default SubscribedTable;
