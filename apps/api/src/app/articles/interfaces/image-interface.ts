import { Field, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class IImage {
  @Field()
  url: string;

  @Field()
  altText: string;

  @Field()
  height: string;

  @Field()
  width: string;
}
