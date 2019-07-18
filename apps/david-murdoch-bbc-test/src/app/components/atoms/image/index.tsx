import React, { FunctionComponent } from 'react';
import StyledImg from '@bbc/psammead-image';

interface Props {
  altText: string;
  url: string;
  height: string;
  width: string;
}

const Image: FunctionComponent<Props> = ({ altText, url, height, width }) => (
  <StyledImg alt={altText} src={url} height={height} width={width} />
);

export default Image;
