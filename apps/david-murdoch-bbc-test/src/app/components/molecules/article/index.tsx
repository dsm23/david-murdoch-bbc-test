import React, { useEffect } from 'react';
import { Headline } from '@bbc/psammead-headings';
import { latin } from '@bbc/gel-foundations/scripts';

import Heading from '../../atoms/heading';
import Image from '../../atoms/image';
import List from '../../atoms/list';
import Paragraph from '../../atoms/paragraph';

import getArticles from '../../../graphql/getArticles';

const mapList = {
  ordered: 'ol',
  unordered: 'ul',
};

const conversion = model => ({
  heading: <Heading key={model.text}>{model.text}</Heading>,
  image: <Image key={model.altText} {...model} />,
  list: (
    <List
      key={`${model.type}-${model.items && model.items.join()}`}
      items={model.items}
      component={mapList[model.type]}
    />
  ),
  paragraph: <Paragraph key={model.text}>{model.text}</Paragraph>,
});

const Article = ({ title, body, client }) => {
  useEffect(() => {
    client.query({
      query: getArticles,
      variables: {
        skip: 0,
        take: 5,
      },
    });
  }, [client]);

  return (
    <>
      <Headline script={latin} service="news">
        {title}
      </Headline>
      {body.map(({ type, model }) => conversion(model)[type])}
    </>
  );
};

export default Article;
