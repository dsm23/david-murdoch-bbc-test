import { Field, ID, ObjectType } from 'type-graphql';

import { ModelUnion } from './model';

import { Image } from './image';
import { List } from './list';
import { Typography } from './typography';

@ObjectType()
export class Body {
  @Field()
  type: string;

  @Field(type => ModelUnion)
  model: Image | List | Typography;
}
