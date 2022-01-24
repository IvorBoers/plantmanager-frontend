import {Event} from "./event";

export class PlantDiedEvent implements Event {
  typeName = "PlantDiedEvent"
  id!: number
  date!: Date
  description = ""
  plantId!: number
  imageId?: number
}
