import { Injectable } from '@nestjs/common';
import { ArticleInput } from './dto/article.input';
import { ArticlesArgs } from './dto/articles.args';
import { Article } from './models/article';

import initialData from './initialData.json';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = initialData || [];
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(article: ArticleInput): Promise<any> {
    const newArticle: Article = { id: this.articles.length, ...article};
    this.articles.push(newArticle);
    return newArticle;
  }

  async findOneById(id: number): Promise<Article> {
    return this.articles.find(article => article.id === id);
  }

  async findAll(articlesArgs: ArticlesArgs): Promise<Article[]> {
    return this.articles;
  }

  async changeRank(id: number, rank: number): Promise<Article> {
    const newArticle: Article = await this.findOneById(id);

    newArticle.rank = rank;

    this.articles.splice(id, 1, newArticle);
    return newArticle;
  }
}
