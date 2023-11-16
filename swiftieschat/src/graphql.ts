
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
}

export interface IQuery {
    albums(): Album[] | Promise<Album[]>;
}

type Nullable<T> = T | null;
