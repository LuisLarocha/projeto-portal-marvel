import { Criadores } from "./criadores";
import { ListasRecursos } from "./listas-recursos";
import { Personagens, Thumbnail } from "./personagens";
import { Quadrinhos } from "./quadrinhos";
import { Series } from "./series";
import { URLs } from "./URLs";

export interface Eventos {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: URLs[];
    modified: Date;
    start: Date;
    end: Date;
    thumbnail: Thumbnail;
    comics: Quadrinhos[];
    stories: ListasRecursos[]; 
    series: Series[]; 
    characters: Personagens[];
    creators: Criadores[];
    next: any[]; 
    previous: any[];
}