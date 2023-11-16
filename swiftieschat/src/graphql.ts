
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface SongResponse {
    _id: string;
    title: string;
    likes: number;
}

export interface Album {
    _id: string;
    title: string;
    releaseDate: DateTime;
    songs: SongResponse[];
}

export interface IQuery {
    albums(): Album[] | Promise<Album[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
