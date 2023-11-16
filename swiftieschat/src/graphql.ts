
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Album {
    id: number;
    title: string;
    releaseDate: DateTime;
}

export interface IQuery {
    albums(): Album[] | Promise<Album[]>;
}

export type DateTime = any;
type Nullable<T> = T | null;
