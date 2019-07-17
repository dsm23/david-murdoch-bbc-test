import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

import { NewModelInput } from './new-model.input';

@InputType()
export class NewBodyInput {
  @Field()
  @MaxLength(30)
  type: string;

  @Field(type => NewModelInput)
  model: NewModelInput;

  // @Field({ nullable: true })
  // @IsOptional()
  // @Length(30, 255)
  // description?: string;

  // @Field(type => [String])
  // ingredients: string[];
}
