import React from 'react';
import { Headline } from '@bbc/psammead-headings';

import Heading from '../../atoms/heading';
import Image from '../../atoms/image';
import List from '../../atoms/list';
import Paragraph from '../../atoms/paragraph';

const mapList = {
  ordered: 'ol',
  unordered: 'ul',
};

const conversion = model => ({
  heading: <Heading>{model.text}</Heading>,
  image: <Image {...model} />,
  list: <List items={model.items} component={mapList[model.type]} />,
  paragraph: <Paragraph>{model.text}</Paragraph>,
});

const Article = ({ title, body }) => (
  <>
    <Headline service="news">{title}</Headline>
    {body.map(({ type, model }) => conversion(model)[type])}
  </>
);

export default Article;
