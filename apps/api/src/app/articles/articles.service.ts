import { Injectable } from '@nestjs/common';
import { NewArticleInput } from './dto/new-article.input';
import { ArticlesArgs } from './dto/articles.args';
import { Article } from './models/article';

import initialData from './initialData.json';

console.log(initialData);

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = initialData || [];
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(article: NewArticleInput): Promise<Article> {
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

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
