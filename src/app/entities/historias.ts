import { Criadores } from "./criadores";
import { Eventos } from "./eventos";
import { Images } from "./images";
import { Personagens } from "./personagens";
import { Quadrinhos } from "./quadrinhos";
import { Series } from "./series";

export interface Historias {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    type: string;
    modified: Date;
    thumbnail: Images;
    comics: Quadrinhos[];
    series:	Series[];
    events:	Eventos[];
    characters: Personagens[];
    creators: Criadores[];
    originalissue: Quadrinhos[];
}