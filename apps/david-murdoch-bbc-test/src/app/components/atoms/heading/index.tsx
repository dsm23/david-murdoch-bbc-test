import React, { FunctionComponent } from 'react';
import { SubHeading } from '@bbc/psammead-headings';

const Heading: FunctionComponent<{}> = ({ children }) => (
  <SubHeading service="news">{children}</SubHeading>
);

export default Heading;
