import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Image {
  @Field()
  url: string;

  @Field()
  altText: string;

  @Field()
  height: string;

  @Field()
  width: string;
}
