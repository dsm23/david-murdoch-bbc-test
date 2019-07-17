import { createUnionType, Field, ID, ObjectType } from 'type-graphql';

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

// @ObjectType()
// export class Model {
//   @Field({ nullable: true })
//   text: string;

//   @Field({ nullable: true })
//   url: string;

//   @Field({ nullable: true })
//   altText: string;

//   @Field({ nullable: true })
//   height: string;

//   @Field({ nullable: true })
//   width: string;

//   @Field(type => [String])
//   items: string[];
// }
