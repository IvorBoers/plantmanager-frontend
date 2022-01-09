import {Image} from "./image";

export interface Entity {
  id: number
  imageId?: number
  image?: Image;
}
