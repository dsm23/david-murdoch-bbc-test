import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Typography {
  @Field()
  text: string;
}
