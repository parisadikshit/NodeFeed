import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { join } from 'path';
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground:true,
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      definitions:{
        path: join(process.cwd(), "src/graphql.ts"),
      }
    }),
    AlbumModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
