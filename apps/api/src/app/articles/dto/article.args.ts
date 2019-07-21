import { Max, Min } from 'class-validator';
import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class ArticleArgs {
  @Field(type => Int)
  @Min(0)
  @Max(4)
  id = 0;
}
