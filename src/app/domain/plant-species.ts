import {Entity} from "./entity";
import {PlantSpeciesType} from "./plant-species-type";

export class PlantSpecies implements Entity {
  id!: number
  parentId!: number
  name!: string
  description!: string
  maximumHeight!: number
  spacing!: number
  sungrade!: number
  image!: string
  type?: PlantSpeciesType


}
