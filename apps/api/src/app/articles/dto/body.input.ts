import { Field, InputType } from 'type-graphql';

import { ModelInputUnion } from '../models/model';

import { ImageInput } from './image.input';
import { ListInput } from './list.input';
import { TypographyInput } from './typography.input';

@InputType()
export class BodyInput {
  @Field()
  type: string;

  @Field(type => [])
  model: [ImageInput | ListInput | TypographyInput];
}
