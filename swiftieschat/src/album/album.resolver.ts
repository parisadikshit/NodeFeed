import { Query, Resolver } from "@nestjs/graphql";
import { Album } from "./album.schema";

@Resolver(of => Album)
export class AlbumResolver {

    @Query(returns => [Album], {name: 'albums'})
    getAllAlbums(){
        // return all albums
        return [
        {
            id:1,
            title: 'Taylor Swift'

        },
        {
            id: 2,
            title: 'Fearless'

        },
        {
            id: 3,
            title: 'Red'
        }]
    }
}