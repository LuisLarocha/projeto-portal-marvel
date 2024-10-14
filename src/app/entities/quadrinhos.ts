import { Images } from "./images";
import { ListasRecursos } from "./listas-recursos";
import { Series } from "./series";
import { URLs } from "./URLs";

export interface Quadrinhos {
    id:	number	
    digitalId: number;	
    title: string;	
    issueNumber: number;	
    variantDescription:	string;
    description: string;	
    modified: Date;	
    isbn: string;	
    upc: string;	
    diamondCode: string;
    ean: string;	
    issn: string;	
    format: string;	
    pageCount: number;	
    textObjects: any[]; 
    resourceURI: string;	
    urls: URLs[]; 	
    series: Series[];
    variants: Quadrinhos[]; 	
    collections: Quadrinhos[]; 	
    collectedIssues: Quadrinhos[];	
    dates: any[]; 	
    prices: any[]; 	
    thumbnail: Images; 	
    images: Images[]; 	
    creators: ListasRecursos[];	
    characters: ListasRecursos[]; 	
    stories: ListasRecursos[]; 	
    events: ListasRecursos[]; 
}
