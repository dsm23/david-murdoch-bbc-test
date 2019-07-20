import { createUnionType } from 'type-graphql';

import { Image } from './image';
import { List } from './list';
import { Typography } from './typography';

export const ModelUnion = createUnionType({
  name: 'Model',
  types: [Image, List, Typography],
  resolveType: value => {
    if ('text' in value) {
      return Typography;
    }
    if ('url' in value) {
      return Image;
    }
    if ('items' in value) {
      return List;
    }
  },
});
