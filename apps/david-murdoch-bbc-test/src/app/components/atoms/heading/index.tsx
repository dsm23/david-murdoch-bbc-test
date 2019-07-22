import React, { FunctionComponent, ReactNode } from 'react';
import { SubHeading } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';

interface Props {
  invariant?: ReactNode;
}

const Heading: FunctionComponent<Props> = ({ children, invariant }) => (
  <SubHeading script={latin} service="news" as={invariant}>
    {children}
  </SubHeading>
);

export default Heading;
