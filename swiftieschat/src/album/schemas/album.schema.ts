import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  mongoose  from "mongoose";
import { Song, SongResponse } from "./song.schema";


@ObjectType()
@Schema()
export class Album {
    @Field((type) => String)
    _id: mongoose.Schema.Types.ObjectId
    
    @Prop()
    @Field((type) => String)
    title: string;

    @Prop()
    @Field((type)=> Date)
    releaseDate: Date;

    @Prop()
    @Field((type)=> [SongResponse])
    songs: Array<Song>;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);