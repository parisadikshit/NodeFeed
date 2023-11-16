import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumResolver } from './resolvers/album.resolver';
import { AlbumSchema } from './schemas/album.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Album', schema: AlbumSchema}])],
  controllers: [],
  providers: [AlbumResolver],
})
export class AlbumModule {}
