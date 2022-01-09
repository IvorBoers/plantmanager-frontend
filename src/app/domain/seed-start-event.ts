import {Event} from "./event";
import {SeedPackage} from "./seed-package";
import {Image} from "./image";

export class SeedStartEvent implements Event {
  typeName = 'SeedStartEvent'
  id!: number
  date!: Date
  description = ""
  seedPackage!: SeedPackage
  image!: Image
}
