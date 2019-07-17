import { IsOptional } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class NewModelInput {
  @Field()
  @IsOptional()
  text: string;

  @Field()
  @IsOptional()
  url: string;

  @Field()
  @IsOptional()
  altText: string;

  @Field()
  @IsOptional()
  height: string;

  @Field()
  @IsOptional()
  width: string;

  @Field(type => [String])
  @IsOptional()
  ingredients: string[];
}
