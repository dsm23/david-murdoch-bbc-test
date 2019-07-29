import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class ArticlesArgs {
  @Field(type => Int)
  @Min(0)
  @Max(4)
  skip = 0;

  @Field(type => Int)
  @Min(1)
  @Max(5)
  take = 5;
}
