import { Module } from '@nestjs/common';
import { AlbumResolver } from './album.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [AlbumResolver],
})
export class AlbumModule {}
