import {Event} from "./event";
import {Image} from "./image";

export class SeedStartEvent implements Event {
  typeName = 'SeedStartEvent'
  id!: number
  plantId!: number
  date!: Date
  description = ""
  seedPackageId!: number
  image!: Image
}
