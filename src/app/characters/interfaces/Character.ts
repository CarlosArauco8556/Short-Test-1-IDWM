import { CharacterLocation } from "./CharacterLocation";

export interface Character {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   CharacterLocation;
    location: CharacterLocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}