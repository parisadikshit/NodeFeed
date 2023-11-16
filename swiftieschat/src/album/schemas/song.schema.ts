import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


@ObjectType()
@Schema()
export class Song {
    @Field((type) => String)
    _id : mongoose.Schema.Types.ObjectId;
    
    @Prop()
    @Field((type)=> String)
    title: string;

    @Prop()
    @Field((type)=>Number)
    likes: number;

}

@ObjectType()
export class SongResponse {
    @Field((type) => String)
    _id : mongoose.Schema.Types.ObjectId;
    
    @Prop()
    @Field((type)=> String)
    title: string;

    @Prop()
    @Field((type)=>Number)
    likes: number;
}

export const SongSchema = SchemaFactory.createForClass(Song);