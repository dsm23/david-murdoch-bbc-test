import { Field, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class IList {
  @Field()
  type: string;

  @Field(type => [String])
  items: string[];
}
