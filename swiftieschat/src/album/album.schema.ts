import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Album {
    @Field((type) => Int)
    id: number

    @Field()
    title: string
}