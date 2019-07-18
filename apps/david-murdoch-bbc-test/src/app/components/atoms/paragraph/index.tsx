import React, { FunctionComponent } from 'react';
import StyledParagraph from '@bbc/psammead-paragraph';
import { latin } from '@bbc/gel-foundations/scripts';

const Paragraph: FunctionComponent<{}> = ({ children }) => (
  <StyledParagraph script={latin} service="news">
    {children}
  </StyledParagraph>
);

export default Paragraph;
