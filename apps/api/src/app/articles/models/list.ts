import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class List {
  @Field()
  type: string;

  @Field(type => [String])
  items: string[];
}
