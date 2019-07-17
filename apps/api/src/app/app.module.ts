import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ArticlesModule } from './articles/articles.module';
import { RecipesModule } from './recipes/recipes.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // CatsModule,
    // GraphQLModule.forRoot({
    //   typePaths: ['./**/*.graphql'],
    //   installSubscriptionHandlers: true,
    // }),
    ArticlesModule,
    RecipesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
