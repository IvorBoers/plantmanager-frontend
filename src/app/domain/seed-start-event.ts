import {Event} from "./event";
import {SeedPackage} from "./seed-package";

export class SeedStartEvent implements Event {
  id!: number
  date!: Date
  description = ""
  seedPackage!: SeedPackage
  image!: string
}
