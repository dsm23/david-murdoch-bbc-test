import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ArticlesModule } from './articles/articles.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ArticlesModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      // subscriptions: {
      //   path: '/graphql',
      // },
    }),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
