import {Entity} from "./entity";
import {PlantSpeciesType} from "./plant-species-type";
import {GrowPeriod} from "./grow-period";

export class PlantSpecies implements Entity {
  id!: number
  parentId!: number
  name!: string
  description!: string
  maximumHeight!: number
  sungrade!: number
  imageId?: number
  type?: PlantSpeciesType

  growPeriods: GrowPeriod[] = []
}
