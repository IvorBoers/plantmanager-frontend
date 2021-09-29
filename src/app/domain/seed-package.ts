import {Entity} from "./entity";
import {PlantSpecies} from "./plant-species";
import {BuyEvent} from "./buy-event";

export class SeedPackage implements Entity {
  id!: number
  description!: string
  expirationDate!: Date
  percentFull = 100
  plantSpecies!: PlantSpecies
  buyEvent?: BuyEvent


}
