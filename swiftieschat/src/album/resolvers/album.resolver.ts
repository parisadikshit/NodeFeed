import { Query, Resolver } from "@nestjs/graphql";
import { Album  } from "../schemas/album.schema";
import { Album as AlbumModel} from "../../graphql";
@Resolver(of => Album)
export class AlbumResolver {

    @Query(returns => [Album], {name: 'albums'})
    getAllAlbums(){
        // return all albums
        let arr: AlbumModel[] = [
            {id:1,title: 'Taylor Swift'},
            {id: 2,title: 'Fearless'},
            {id: 3,title: 'Red'
            }]
        return arr;
    }
}