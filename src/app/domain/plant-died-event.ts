import {Event} from "./event";
import {Plant} from "./plant";

export class PlantDiedEvent implements Event {
  id!: number
  date!: Date
  description = ""
  plant!: Plant
  image!: string
}
