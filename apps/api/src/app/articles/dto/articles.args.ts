import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class ArticlesArgs {
  @Field(type => Int)
  @Min(0)
  limit = 1;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  offset = 1;
}
