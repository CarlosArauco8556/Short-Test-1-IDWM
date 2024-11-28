import { Character } from "./Character";
import { Info } from "./Info";

export interface ResponseAPIGetAll {
    info:    Info;
    results: Character[];
}