import { Criadores } from "./criadores";
import { Eventos } from "./eventos";
import { Historias } from "./historias";
import { Images } from "./images";
import { Personagens } from "./personagens";
import { Quadrinhos } from "./quadrinhos";
import { URLs } from "./URLs";

export interface Series {
    id:	number;
    title:	string;
    description: string;
    resourceURI: string;
    urls: URLs[];
    startYear: number;
    endYear: number;
    rating:	string;
    modified: Date;
    thumbnail: Images;
    comics:	Quadrinhos[];
    stories: Historias[];
    events:	Eventos[];
    characters:	Personagens[];
    creators: Criadores[];
    next: Series[];
    previous: Series[];
}