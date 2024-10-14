import { ListasRecursos } from "./listas-recursos";
import { URLs } from "./URLs";

export interface Personagens {
    id: number;	
    name: string;	
    description: string;	
    modified: Date;	
    resourceURI: string;	
    urls: URLs; 
    thumbnail: Thumbnail;	
    comics: ListasRecursos; 
    stories: ListasRecursos; 
    events: ListasRecursos; 
    series: ListasRecursos; 
}

export interface Thumbnail {
    extension: string;
    path: string;
}