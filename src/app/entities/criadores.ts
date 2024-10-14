import { ListasRecursos } from "./listas-recursos";
import { Thumbnail } from "./personagens";
import { URLs } from "./URLs";

export interface Criadores {
    id: number;	
    firstName: string;	
    middleName: string;	
    lastName: string;	
    suffix: string;	
    fullName: string;	
    modified: Date;	
    resourceURI: string;	
    urls: URLs[]; 
    thumbnail: Thumbnail; 	
    series: ListasRecursos;
    stories: ListasRecursos;	
    comics: ListasRecursos;	
    events: ListasRecursos;	
  }