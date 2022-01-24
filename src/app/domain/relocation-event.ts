import {Event} from "./event";

export class RelocationEvent implements Event {
  typeName = "RelocationEvent"
  id!: number
  date!: Date
  description = ""
  locationId!: number
  plantId!: number
}
