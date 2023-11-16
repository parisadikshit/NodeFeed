import { Query, Resolver } from "@nestjs/graphql";

@Resolver("Album")
export class AlbumResolver {

    @Query("albums")
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