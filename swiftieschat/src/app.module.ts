import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground:true,
      typePaths: ['./**/*.graphql']
    }),
    AlbumModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
