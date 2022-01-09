import {Event} from "./event";
import {Plant} from "./plant";

export class PlantDiedEvent implements Event {
  typeName = "PlantDiedEvent"
  id!: number
  date!: Date
  description = ""
  plant!: Plant
  imageId?: number
}
