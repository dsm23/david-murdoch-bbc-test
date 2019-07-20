import { Field, ID, InputType } from 'type-graphql';

import { BodyInput } from './body.input';

@InputType({ description: 'The article model' })
export class ArticleInput {
  @Field()
  title: string;

  @Field(type => [BodyInput])
  body: BodyInput[];
}
