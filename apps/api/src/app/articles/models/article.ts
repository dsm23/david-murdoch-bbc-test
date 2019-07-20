import { Field, ID, ObjectType } from 'type-graphql';

import { Body } from './body';

@ObjectType({ description: 'The article model' })
export class Article {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  rank?: number;

  @Field(type => [Body])
  body: Body[];
}
