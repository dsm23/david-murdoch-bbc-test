import React, { FunctionComponent, ReactNode } from 'react';
import { SubHeading } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';

interface Props {
  variant?: ReactNode;
}

const Heading: FunctionComponent<Props> = ({ children, variant }) => (
  <SubHeading script={latin} service="news" as={variant}>
    {children}
  </SubHeading>
);

export default Heading;
