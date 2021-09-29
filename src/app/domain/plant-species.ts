import {Entity} from "./entity";

export class PlantSpecies implements Entity {
  id!: number
  parentId!: number
  name!: string
  description!: string
  maximumHeight!: number
  spacing!: number
  sungrade!: number
  image!: string


}
