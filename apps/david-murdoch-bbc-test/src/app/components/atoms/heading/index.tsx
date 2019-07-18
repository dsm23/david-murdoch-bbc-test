import React, { FunctionComponent } from 'react';
import { SubHeading } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';

const Heading: FunctionComponent<{}> = ({ children }) => (
  <SubHeading script={latin} service="news">
    {children}
  </SubHeading>
);

export default Heading;
