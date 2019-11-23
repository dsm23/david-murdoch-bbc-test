import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ArticlesModule } from './articles/articles.module';

import { environment } from '../environments/environment';

@Module({
  imports: [
    ArticlesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      playground: !environment.production,
    }),
  ],
})
export class AppModule {}
