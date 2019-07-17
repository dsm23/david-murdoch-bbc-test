import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { NewArticleInput } from './dto/new-article.input';
import { ArticlesArgs } from './dto/articles.args';
import { Article } from './models/article';
import { ArticlesService } from './articles.service';

const pubSub = new PubSub();

@Resolver(of => Article)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query(returns => Article)
  async article(@Args('id') id: number): Promise<Article> {
    const article = await this.articlesService.findOneById(id);
    if (!article) {
      throw new NotFoundException(id);
    }
    return article;
  }

  @Query(returns => [Article])
  articles(@Args() articlesArgs: ArticlesArgs): Promise<Article[]> {
    return this.articlesService.findAll(articlesArgs);
  }

  @Mutation(returns => Article)
  async addArticle(
    @Args('newArticleData') newArticleData: NewArticleInput,
  ): Promise<Article> {
    const article = await this.articlesService.create(newArticleData);
    pubSub.publish('articleAdded', { articleAdded: article });
    return article;
  }

  @Mutation(returns => Boolean)
  async removeArticle(@Args('id') id: string) {
    return this.articlesService.remove(id);
  }

  @Subscription(returns => Article)
  articleAdded() {
    return pubSub.asyncIterator('articleAdded');
  }
}
