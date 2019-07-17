import { IsOptional, Length, MaxLength } from 'class-validator';
import { Field, InputType } from 'type-graphql';

import { NewBodyInput } from './new-body.input';

@InputType()
export class NewArticleInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field(type => NewBodyInput)
  body: NewBodyInput;

  // @Field({ nullable: true })
  // @IsOptional()
  // @Length(30, 255)
  // description?: string;

  // @Field(type => [String])
  // ingredients: string[];
}
