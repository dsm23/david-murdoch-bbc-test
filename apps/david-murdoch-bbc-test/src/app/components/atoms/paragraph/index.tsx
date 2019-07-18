import React, { FunctionComponent } from 'react';
import StyledParagraph from '@bbc/psammead-paragraph';

const Paragraph: FunctionComponent<{}> = ({ children }) => (
  <StyledParagraph service="news">{children}</StyledParagraph>
);

export default Paragraph;
