import { Field, InterfaceType } from 'type-graphql';

@InterfaceType()
export abstract class ITypography {
  @Field()
  text: string;
}
