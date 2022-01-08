import {Event} from "./event";
import {PlantLocation} from "./plant-location";

export class RelocationEvent implements Event {
  typeName = "RelocationEvent"
  id!: number
  date!: Date
  description = ""
  location!: PlantLocation
}
