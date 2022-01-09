import {Entity} from "./entity";
import {Image} from "./image";

export class PlantLocation implements Entity {
  id!: number
  name!: string
  description!: string
  color!: string
  imageId?: number
  image?: Image

}
