import { attributesDto } from "./attributesDto";
import { labelDto } from "./labelDto";

export interface entryDto {
    category?: attributesDto;
    id?: object;
    "im:artist"?: object;
    "im:contentType"?: object;
    "im:image"?: labelDto[];
    "im:name"?: labelDto;
    "im:price"?: object;
    "im:releaseDate"?: object;
    link?: object[];
    rights?: object;
    title?: labelDto;
    summary?: object;
}

